import { Module } from "@nestjs/common";
import { TravellerController } from "./traveller.controller";
import { TravellerService } from "./traveller.service";

@Module({
  controllers: [TravellerController],
  providers: [TravellerService],
  exports: [TravellerService],
})
export class TravellerModule {}
