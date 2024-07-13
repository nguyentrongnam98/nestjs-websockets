import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
})
export class MyGateway implements OnModuleInit {
  @WebSocketServer()
  server: Server;
  onModuleInit() {
    this.server.on('connection', (socket: any) => {
      console.log('Client connected', socket.id);
    });
  }
  @SubscribeMessage('events')
  onNewMessage(@MessageBody() body: any): void {
    this.server.emit('events', {
      message: 'Hello from server',
      body,
    });
  }
}
