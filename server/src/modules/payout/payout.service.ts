import { Injectable } from "@nestjs/common";
import { Payout } from "@prisma/client";
import { PrismaService } from "../../modules/prisma/prisma.service";

@Injectable()
export class PayoutService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createPayoutDto: any): Promise<Payout> {
    return this.prismaService.payout.create({
      data: createPayoutDto
    })
  }

  async getAll(): Promise<Payout[]> {
    return this.prismaService.payout.findMany();
  }
}