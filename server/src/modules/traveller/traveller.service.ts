import { Injectable } from '@nestjs/common';
import { Payout, Traveller } from '@prisma/client';
import { PrismaService } from '../../modules/prisma/prisma.service';

@Injectable()
export class TravellerService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createTravellerDto: any): Promise<Traveller> {
    return this.prismaService.traveller.create({
      data: createTravellerDto,
    });
  }

  async createPayout(travellerId: number, createPayoutDto: any): Promise<Payout> {
    return this.prismaService.payout.create({
      data: { ...createPayoutDto, travellerId },
    });
  }

  async calculateOwePayouts(travellerId: number): Promise<any> {
    const data = await this.prismaService.traveller.findFirst({
      where: { id: travellerId },
      select: {
        owePayouts: {
          select: {
            traveller: true,
            name: true,
            amount: true,
          }
        }
      }
    });

    return data.owePayouts;
  }

  async getPayouts(travellerId: number): Promise<Payout[]> {
    return this.prismaService.payout.findMany({
      where: { travellerId },
    });
  }
}
