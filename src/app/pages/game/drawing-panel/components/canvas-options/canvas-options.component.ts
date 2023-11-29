import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxSliderModule } from 'ngx-slider-v2';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-canvas-options',
  standalone: true,
  imports: [
    CommonModule,
    MatTooltipModule,
    NgxSliderModule,
    ReactiveFormsModule,
  ],
  templateUrl: './canvas-options.component.html',
  styleUrl: './canvas-options.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanvasOptionsComponent implements OnInit {
  @Input() public ctx!: CanvasRenderingContext2D;
  @Input() public canvasElement!: HTMLCanvasElement;
  public lineWidthControl = new FormControl<number>(3);
  public color!: string;
  public activeTool = 'brush';
  public previousTool!: string;

  ngOnInit() {
    console.log(this.ctx, 'hajnsdfkjbajhkfbasjkhdf');
    this.changeTool(this.activeTool);
  }

  public changeColor(color: string): void {
    this.ctx.globalCompositeOperation = 'source-over';
    this.changeTool(this.previousTool);
    switch (color) {
      case 'black':
        this.ctx.strokeStyle = 'rgb(25, 25, 25)';
        break;
      case 'white':
        this.ctx.strokeStyle = 'white';
        break;
      case 'red':
        this.ctx.strokeStyle = 'rgb(216, 55, 55)';
        break;
      case 'green':
        this.ctx.strokeStyle = 'rgb(41, 116, 41)';
        break;
      case 'blue':
        this.ctx.strokeStyle = 'rgb(32, 32, 202)';
        break;
      case 'custom':
        this.ctx.strokeStyle = '';
        break;
      default:
        this.ctx.strokeStyle = 'rgb(25, 25, 25)';
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
        this.ctx.lineCap = 'square';
        this.lineWidthControl.setValue(4);
        this.ctx.globalAlpha = 1;
        this.ctx.globalCompositeOperation = 'source-over';
        break;
      case 'marker':
        this.ctx.lineCap = 'square';
        this.lineWidthControl.setValue(8);
        this.ctx.globalAlpha = 1;
        this.ctx.globalCompositeOperation = 'source-over';
        break;
      case 'pencil':
        this.ctx.lineCap = 'round';
        this.lineWidthControl.setValue(2);
        this.ctx.globalAlpha = 1;
        this.ctx.globalCompositeOperation = 'source-over';
        break;
      case 'eraser':
        this.ctx.lineCap = 'round';
        this.lineWidthControl.setValue(5);
        this.ctx.globalAlpha = 1;
        this.ctx.globalCompositeOperation = 'destination-out';
        break;
      default:
        this.ctx.lineCap = 'round';
        this.ctx.globalAlpha = 1;
        this.lineWidthControl.setValue(2);
        this.ctx.globalCompositeOperation = 'source-over';
        break;
    }
    this.changeThickness();
  }

  public changeThickness(): void {
    this.ctx.lineWidth = this.lineWidthControl.value as number;
  }

  public clearCanvas(): void {
    this.ctx.clearRect(
      0,
      0,
      this.canvasElement.width,
      this.canvasElement.height,
    );
  }
}
