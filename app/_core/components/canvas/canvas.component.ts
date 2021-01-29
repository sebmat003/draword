import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CanvasData } from 'ClientApp/app/models/canvasData.model';
import { MousePosition } from 'ClientApp/app/models/mousePosition.model';
import { DrawingService } from 'ClientApp/app/_core/services/drawing.service';
import { WebSocketConnectionService } from 'ClientApp/app/_core/services/ws-connection.service';
import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') canvas: ElementRef;
  @Input() canvasData: CanvasData;
  canvasElement: HTMLCanvasElement;
  drawingMode = this.drawingService.drawingMode;
  ctx: CanvasRenderingContext2D;
  lineWidth = 3;
  color: string;
  activeTool: string = 'brush';
  previousTool: string;

  constructor(private webSocketConnection: WebSocketConnectionService,
              public drawingService: DrawingService) {}

  ngOnInit(): void {
    this.webSocketConnection.startListening();
  }
  
  ngAfterViewInit(): void {
    this.canvasElement = this.canvas.nativeElement;
    this.setResolution();
    this.ctx = this.canvasElement.getContext('2d');
    this.changeTool(this.activeTool);
    this.ctx.strokeStyle = 'rgb(25, 25, 25)';
    this.ctx.globalCompositeOperation='source-over';
    this.captureEvents(this.canvasElement);
    this.webSocketConnection.receivedMessage.subscribe((messages) => {
      if(!this.drawingMode) {
        for(let msg of messages) {
          if(msg) {
            this.draw({x: msg.px, y: msg.py}, {x: msg.cx, y: msg.cy});
          }
        }
      }
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.setResolution();
  }

  setResolution(): void {
    this.canvasElement.width = window.innerWidth - this.convertRemToPixels(40);
    this.canvasElement.height = window.innerHeight - this.convertRemToPixels(14);
  }

  draw(prevPos: MousePosition, currentPos: MousePosition): void {
    this.ctx.beginPath();
    this.ctx.moveTo(prevPos.x, prevPos.y);
    this.ctx.lineTo(currentPos.x, currentPos.y);
    this.ctx.stroke();
    if(this.drawingService.drawingMode) {
      this.webSocketConnection.collectDataToSend({px: prevPos.x, py: prevPos.y, cx: currentPos.x, cy: currentPos.y});
    }
  }

  changeColor(color: string): void {
    this.ctx.globalCompositeOperation='source-over';
    this.changeTool(this.previousTool);
    switch(color) {
      case 'black': {
        this.ctx.strokeStyle = 'rgb(25, 25, 25)';
      } break;
      case 'white': {
        this.ctx.strokeStyle = 'white';
      } break;
      case 'red': {
        this.ctx.strokeStyle = 'rgb(216, 55, 55)';
      } break;
      case 'green': {
        this.ctx.strokeStyle = 'rgb(41, 116, 41)';
      } break;
      case 'blue': {
        this.ctx.strokeStyle = 'rgb(32, 32, 202)';
      } break;
      case 'custom': {
        this.ctx.strokeStyle = '';
      } break;
      default: {
        this.ctx.strokeStyle = 'rgb(25, 25, 25)';
      } break;
    }
  }

  changeTool(tool: string): void {
    this.activeTool = tool;
    if(tool !== 'eraser') {
      this.previousTool = tool;
    }
    switch(tool) {
      case 'brush': {
        this.ctx.lineCap = 'square';
        this.lineWidth = 4;
        this.ctx.globalAlpha = 1;
        this.ctx.globalCompositeOperation='source-over';
      } break;
      case 'marker': {
        this.ctx.lineCap = 'square';
        this.lineWidth = 8;
        this.ctx.globalAlpha = 1;
        this.ctx.globalCompositeOperation='source-over';
      } break;
      case 'pencil': {
        this.ctx.lineCap = 'round';
        this.lineWidth = 2;
        this.ctx.globalAlpha = 1;
        this.ctx.globalCompositeOperation='source-over';
      } break;
      case 'eraser': {
        this.ctx.lineCap = 'round';
        this.lineWidth = 5;
        this.ctx.globalAlpha = 1;
        this.ctx.globalCompositeOperation='destination-out';
      } break;
      default: {
        this.ctx.lineCap = 'round';
        this.ctx.globalAlpha = 1;
        this.lineWidth = 2;
        this.ctx.globalCompositeOperation='source-over';
      } break;
    }
    this.changeThickness();
  }

  changeThickness(): void {
    this.ctx.lineWidth = this.lineWidth;
  }

  clearCanvas(): void {
    this.ctx.clearRect(0,0,this.canvasElement.width, this.canvasElement.height);
  }

  captureEvents(canvasElement: HTMLCanvasElement): void {
    fromEvent(canvasElement, 'mousedown')
    .pipe(
      switchMap(e => {
        return fromEvent(canvasElement, 'mousemove')
        .pipe(
          takeUntil(fromEvent(canvasElement, 'mouseup')),
          takeUntil(fromEvent(canvasElement, 'mouseleave')),
          pairwise()
        )
      })
    ).subscribe((res:[MouseEvent, MouseEvent]) => {
      if(this.drawingMode) {
        const rect = canvasElement.getBoundingClientRect();
        const prevPos: MousePosition = {
          x: Math.round(res[0].clientX - rect.left),
          y: Math.round(res[0].clientY - rect.top)
        }
        const currentPos: MousePosition = {
          x: Math.round(res[1].clientX - rect.left),
          y: Math.round(res[1].clientY - rect.top)
        }
        this.draw(prevPos, currentPos);
      }
    })
  }

  convertRemToPixels(rem): number {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
  }
}
