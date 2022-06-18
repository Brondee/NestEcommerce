import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { BanerService } from './baner.service';
import { CreateBanerDto, EditBanerDto } from './dto';

@Controller('baners')
export class BanerController {
  constructor(private banerService: BanerService) {}

  @Get()
  getAllBaners() {
    return this.banerService.getAllBaners();
  }

  @UseGuards(JwtGuard)
  @Post('add')
  addBaner(@Body() dto: CreateBanerDto) {
    return this.banerService.addBaner(dto);
  }

  @UseGuards(JwtGuard)
  @Patch('edit')
  editBaner(@Body() dto: EditBanerDto) {
    return this.banerService.editBaner(dto);
  }
}
