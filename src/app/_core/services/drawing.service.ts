import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DrawingService {
  public drawingMode = true;
  public drawingData: any;

  constructor() {}
}
