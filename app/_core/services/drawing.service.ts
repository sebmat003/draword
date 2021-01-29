import { Injectable } from "@angular/core";

@Injectable({
   providedIn: 'root'
})
export class DrawingService {
   drawingMode = true;
   drawingData;

   constructor() {}
}