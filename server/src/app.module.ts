import { Module } from '@nestjs/common';
import { GlobalModule } from './modules/global/global.module';
import { PayoutModule } from './modules/payout/payout.module';
import { TravellerModule } from './modules/traveller/traveller.module';

@Module({
  imports: [GlobalModule, TravellerModule, PayoutModule],
})
export class AppModule {}
