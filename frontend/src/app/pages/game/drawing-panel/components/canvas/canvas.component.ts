import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { pairwise, switchMap, takeUntil } from 'rxjs/operators';
import { ICanvasData } from 'src/app/models/canvasData.model';
import { IMousePosition } from 'src/app/models/mousePosition.model';
import { DrawingService } from '../../../../../_core/services/drawing.service';
import { WebSocketConnectionService } from '../../../../../_core/services/ws-connection.service';
import { convertRemToPixels } from '../../../../../_core/utils/convert-rem-to-px.util';
import { CanvasOptionsComponent } from '../canvas-options/canvas-options.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
  standalone: true,
  imports: [CanvasOptionsComponent, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanvasComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('canvas') public canvas!: ElementRef;
  @Input() public canvasData!: ICanvasData;
  public canvasElement!: HTMLCanvasElement;
  public drawingMode = this.drawingService.drawingMode;
  public ctx!: CanvasRenderingContext2D;
  private destroy$ = new Subject<void>();

  constructor(
    public drawingService: DrawingService,
    private webSocketConnection: WebSocketConnectionService,
    private cdr: ChangeDetectorRef,
  ) {}

  public ngOnInit(): void {
    this.webSocketConnection.startListening();
  }

  public ngAfterViewInit(): void {
    this.canvasElement = this.canvas.nativeElement;
    this.setResolution();
    this.ctx = this.canvasElement.getContext('2d') as CanvasRenderingContext2D;
    this.ctx.strokeStyle = 'rgb(25, 25, 25)';
    this.ctx.globalCompositeOperation = 'source-over';
    this.captureEvents(this.canvasElement);
    this.cdr.markForCheck();
    this.webSocketConnection.receivedMessage
      .pipe(takeUntil(this.destroy$))
      .subscribe((messages) => {
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
    this.canvasElement.width = window.innerWidth - convertRemToPixels(40);
    this.canvasElement.height = window.innerHeight - convertRemToPixels(14);
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

  public captureEvents(canvasElement: HTMLCanvasElement): void {
    fromEvent(canvasElement, 'mousedown')
      .pipe(
        takeUntil(this.destroy$),
        switchMap(() =>
          fromEvent<MouseEvent>(canvasElement, 'mousemove').pipe(
            takeUntil(fromEvent(canvasElement, 'mouseup')),
            takeUntil(fromEvent(canvasElement, 'mouseleave')),
            pairwise(),
          ),
        ),
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

  public ngOnDestroy(): void {
    this.destroy$.next();
  }
}
