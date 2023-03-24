import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Payout } from "@prisma/client";
import { CreatePayoutDto } from "./dto/payout.dto";
import { PayoutService } from "./payout.service";

@Controller("payouts")
@ApiTags("Payout")
export class PayoutController {
  constructor(private readonly payoutService: PayoutService) {}

  @Post("/")
  async createPayout(@Body() createPayoutDto: CreatePayoutDto): Promise<Payout> {
    return this.payoutService.create(createPayoutDto);
  }

  @Get("/")
  async getAllPayouts(): Promise<Payout[]> {
    return this.payoutService.getAll();
  }
}
