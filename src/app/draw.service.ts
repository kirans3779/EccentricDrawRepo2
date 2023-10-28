import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class DrawService {

  constructor(private socket: Socket) { }
// for sending data
  sendDraw(data: any) {
    this.socket.emit('draw', data);
  }
// for  drawing
  onDraw() {
    return this.socket.fromEvent('draw');
  }
}

