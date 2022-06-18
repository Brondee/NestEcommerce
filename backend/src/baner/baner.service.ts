import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBanerDto, EditBanerDto } from './dto';

@Injectable()
export class BanerService {
  constructor(private prisma: PrismaService) {}

  async getAllBaners() {
    const baners = await this.prisma.baner.findMany({
      where: {
        isShown: true,
      },
    });
    return { baners };
  }

  async addBaner(dto: CreateBanerDto) {
    const baner = await this.prisma.baner.create({
      data: { ...dto },
    });
    return { baner };
  }

  async editBaner(dto: EditBanerDto) {
    const banerId = dto.banerId;
    delete dto.banerId;
    const baner = await this.prisma.baner.update({
      where: {
        id: banerId,
      },
      data: { ...dto },
    });
    return { baner };
  }
}
