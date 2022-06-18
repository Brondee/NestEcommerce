import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto';

@Controller('categories')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get('')
  getAllCategories() {
    return this.categoryService.getAllCategories();
  }

  @Get(':id')
  getProductsByCategory(@Param('id', ParseIntPipe) categoryId: number) {
    return this.categoryService.getProductsByCategory(categoryId);
  }

  @UseGuards(JwtGuard)
  @Post('add')
  addCategory(@Body() dto: CreateCategoryDto) {
    return this.categoryService.addCategory(dto);
  }
}
