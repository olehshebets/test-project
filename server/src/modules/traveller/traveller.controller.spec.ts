import { Test } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { TravellerController } from './traveller.controller';
import { TravellerService } from './traveller.service';

describe('TravellerController', () => {
  let travellerController: TravellerController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [TravellerController],
      providers: [PrismaService, TravellerService]
    })
      .overrideProvider(PrismaService).useValue(() => {})
      .compile();

    travellerController = module.get<TravellerController>(TravellerController);
  });

  it('should be defined', () => {
    expect(travellerController).toBeDefined(); 
  });
});
