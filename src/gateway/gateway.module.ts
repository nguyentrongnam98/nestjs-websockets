import { Module } from '@nestjs/common';
import { MyGateway } from './gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [MyGateway],
})
export class GatewayModule {}
