import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { pairwise, switchMap, takeUntil } from 'rxjs/operators';
import { ICanvasData } from 'src/app/models/canvasData.model';
import { IMousePosition } from 'src/app/models/mousePosition.model';
import { DrawingService } from '../../services/drawing.service';
import { WebSocketConnectionService } from '../../services/ws-connection.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') public canvas!: ElementRef;
  @Input() public canvasData!: ICanvasData;
  public canvasElement!: HTMLCanvasElement;
  public drawingMode = this.drawingService.drawingMode;
  public ctx!: CanvasRenderingContext2D;
  public lineWidth = 3;
  public color!: string;
  public activeTool = 'brush';
  public previousTool!: string;

  constructor(
    private webSocketConnection: WebSocketConnectionService,
    public drawingService: DrawingService
  ) {}

  public ngOnInit(): void {
    this.webSocketConnection.startListening();
  }

  public ngAfterViewInit(): void {
    this.canvasElement = this.canvas.nativeElement;
    this.setResolution();
    this.ctx = this.canvasElement.getContext('2d') as CanvasRenderingContext2D;
    this.changeTool(this.activeTool);
    this.ctx.strokeStyle = 'rgb(25, 25, 25)';
    this.ctx.globalCompositeOperation = 'source-over';
    this.captureEvents(this.canvasElement);
    this.webSocketConnection.receivedMessage.subscribe((messages) => {
      if (!this.drawingMode) {
        for (const msg of messages) {
          if (msg) {
            this.draw({ x: msg.px, y: msg.py }, { x: msg.cx, y: msg.cy });
          }
        }
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  public onResize(): void {
    this.setResolution();
  }

  public setResolution(): void {
    this.canvasElement.width = window.innerWidth - this.convertRemToPixels(40);
    this.canvasElement.height =
      window.innerHeight - this.convertRemToPixels(14);
  }

  public draw(prevPos: IMousePosition, currentPos: IMousePosition): void {
    this.ctx.beginPath();
    this.ctx.moveTo(prevPos.x, prevPos.y);
    this.ctx.lineTo(currentPos.x, currentPos.y);
    this.ctx.stroke();
    if (this.drawingService.drawingMode) {
      this.webSocketConnection.collectDataToSend({
        px: prevPos.x,
        py: prevPos.y,
        cx: currentPos.x,
        cy: currentPos.y,
      });
    }
  }

  public changeColor(color: string): void {
    this.ctx.globalCompositeOperation = 'source-over';
    this.changeTool(this.previousTool);
    switch (color) {
      case 'black':
        {
          this.ctx.strokeStyle = 'rgb(25, 25, 25)';
        }
        break;
      case 'white':
        {
          this.ctx.strokeStyle = 'white';
        }
        break;
      case 'red':
        {
          this.ctx.strokeStyle = 'rgb(216, 55, 55)';
        }
        break;
      case 'green':
        {
          this.ctx.strokeStyle = 'rgb(41, 116, 41)';
        }
        break;
      case 'blue':
        {
          this.ctx.strokeStyle = 'rgb(32, 32, 202)';
        }
        break;
      case 'custom':
        {
          this.ctx.strokeStyle = '';
        }
        break;
      default:
        {
          this.ctx.strokeStyle = 'rgb(25, 25, 25)';
        }
        break;
    }
  }

  public changeTool(tool: string): void {
    this.activeTool = tool;
    if (tool !== 'eraser') {
      this.previousTool = tool;
    }
    switch (tool) {
      case 'brush':
        {
          this.ctx.lineCap = 'square';
          this.lineWidth = 4;
          this.ctx.globalAlpha = 1;
          this.ctx.globalCompositeOperation = 'source-over';
        }
        break;
      case 'marker':
        {
          this.ctx.lineCap = 'square';
          this.lineWidth = 8;
          this.ctx.globalAlpha = 1;
          this.ctx.globalCompositeOperation = 'source-over';
        }
        break;
      case 'pencil':
        {
          this.ctx.lineCap = 'round';
          this.lineWidth = 2;
          this.ctx.globalAlpha = 1;
          this.ctx.globalCompositeOperation = 'source-over';
        }
        break;
      case 'eraser':
        {
          this.ctx.lineCap = 'round';
          this.lineWidth = 5;
          this.ctx.globalAlpha = 1;
          this.ctx.globalCompositeOperation = 'destination-out';
        }
        break;
      default:
        {
          this.ctx.lineCap = 'round';
          this.ctx.globalAlpha = 1;
          this.lineWidth = 2;
          this.ctx.globalCompositeOperation = 'source-over';
        }
        break;
    }
    this.changeThickness();
  }

  public changeThickness(): void {
    this.ctx.lineWidth = this.lineWidth;
  }

  public clearCanvas(): void {
    this.ctx.clearRect(
      0,
      0,
      this.canvasElement.width,
      this.canvasElement.height
    );
  }

  public captureEvents(canvasElement: HTMLCanvasElement): void {
    fromEvent(canvasElement, 'mousedown')
      .pipe(
        switchMap((e) => {
          return fromEvent<MouseEvent>(canvasElement, 'mousemove').pipe(
            takeUntil(fromEvent(canvasElement, 'mouseup')),
            takeUntil(fromEvent(canvasElement, 'mouseleave')),
            pairwise()
          );
        })
      )
      .subscribe((res: [MouseEvent, MouseEvent]) => {
        if (this.drawingMode) {
          const rect = canvasElement.getBoundingClientRect();
          const prevPos: IMousePosition = {
            x: Math.round(res[0].clientX - rect.left),
            y: Math.round(res[0].clientY - rect.top),
          };
          const currentPos: IMousePosition = {
            x: Math.round(res[1].clientX - rect.left),
            y: Math.round(res[1].clientY - rect.top),
          };
          this.draw(prevPos, currentPos);
        }
      });
  }

  public convertRemToPixels(rem: number): number {
    return (
      rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  }
}
