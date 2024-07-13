import { Module } from '@nestjs/common';
import { SocketClient } from './socket-client';

@Module({
  imports: [],
  controllers: [],
  providers: [SocketClient],
})
export class SocketModule {}
