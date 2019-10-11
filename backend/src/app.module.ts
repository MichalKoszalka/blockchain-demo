import { Module } from '@nestjs/common';
import { CoinService } from './coin/coin.service';
import { CoinController } from './coin/coin.controller';

@Module({
  imports: [],
  controllers: [CoinController],
  providers: [CoinService],
})
export class AppModule {}
