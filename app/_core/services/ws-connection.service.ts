import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';

@Injectable({
    providedIn: 'root'
})
export class WebSocketConnectionService {

    dataToSend = [];
    receivedMessage = new Subject<any>();

    webSocket: WebSocketSubject<any> = webSocket('ws://localhost:5000/ws');
    
    constructor() {
    }

    startListening() {
        this.webSocket.asObservable().subscribe(
            msg => {
                console.log(msg);
                this.receivedMessage.next(msg);
               
            },
            err => console.log(err),
            () => console.log('connection has been closed')
        )
        this.sendData();
    }

    sendData() {
        setInterval(() => {
            if(this.dataToSend.length > 0) {
                this.webSocket.next(this.dataToSend);
                this.dataToSend = [];
            }
        }, 500);
    }

    collectDataToSend(data) {
        this.dataToSend.push(data);
    }
}