import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class WebSocketConnectionService {
  public dataToSend: any[] = [];
  public receivedMessage = new Subject<any>();

  public webSocket: WebSocketSubject<any> = webSocket('ws://localhost:5000/ws');

  constructor() {}

  public startListening(): void {
    this.webSocket.asObservable().subscribe(
      (msg) => {
        console.log(msg);
        this.receivedMessage.next(msg);
      },
      (err) => console.log(err),
      () => console.log('connection has been closed')
    );
    this.sendData();
  }

  public sendData(): void {
    setInterval(() => {
      if (this.dataToSend.length > 0) {
        this.webSocket.next(this.dataToSend);
        this.dataToSend = [];
      }
    }, 500);
  }

  public collectDataToSend(data: any): void {
    this.dataToSend.push(data);
  }
}
