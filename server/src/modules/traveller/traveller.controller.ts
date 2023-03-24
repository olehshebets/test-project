import { Traveller } from ".prisma/client";
import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Payout } from "@prisma/client";
import { TravellerService } from "./traveller.service";

@Controller("travellers")
@ApiTags("Traveller")
export class TravellerController {
  constructor(private readonly travellerService: TravellerService) {}

  @Post("/")
  async createTraveller(@Body() createTravellerDto: any): Promise<Traveller> {
    return this.travellerService.create(createTravellerDto);
  }

  @Post("/:id/payouts")
  async createTravellerPayout(@Param("id", ParseIntPipe) id: number, @Body() createTravellerDto: any): Promise<Payout> {
    return this.travellerService.createPayout(id, createTravellerDto);
  }

  @Get("/:id/calc-owe-payouts")
  async calculateOwePayouts(@Param("id", ParseIntPipe) id: number): Promise<any> {
    return this.travellerService.calculateOwePayouts(id);
  }

  @Get(":id/payouts")
  async getPayoutsByTravellerId(@Param("id", ParseIntPipe) travellerId: number) {
    return this.travellerService.getPayouts(travellerId);
  }


}
