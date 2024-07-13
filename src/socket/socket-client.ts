import { Injectable, OnModuleInit } from '@nestjs/common';
import { io, Socket } from 'socket.io-client';

@Injectable()
export class SocketClient implements OnModuleInit {
  public socketClient: Socket;

  constructor() {
    this.socketClient = io('http://localhost:3000');
  }

  onModuleInit() {
    this.registerEventHandlers();
  }

  private registerEventHandlers() {
    // this.socketClient.emit('events', { message: 'Hello from client 123' });
    this.socketClient.on('connect', () => {
      console.log('Connected to server Nam Nguyen');
    });
    this.socketClient.on('events', (data) => {
      console.log('Received message from server', data);
    });
  }
}
