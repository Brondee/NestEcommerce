import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import { ConnectCategoryDto, CreateProductDto, EditProductDto } from './dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('all')
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get('page=:page')
  getProductsByPage(@Param('page', ParseIntPipe) page: number) {
    return this.productService.getProductsByPage(page);
  }

  @Get(':id')
  getProductById(@Param('id', ParseIntPipe) productId: number) {
    return this.productService.getProductById(productId);
  }

  @Get('search/:query')
  searchProducts(@Param('query') query: string) {
    return this.productService.searchProducts(query);
  }

  @UseGuards(JwtGuard)
  @Post('add')
  addProduct(@Body() dto: CreateProductDto) {
    return this.productService.createProduct(dto);
  }

  @Patch('addcategory')
  connectCategory(@Body() dto: ConnectCategoryDto) {
    return this.productService.connectCategory(dto);
  }

  @UseGuards(JwtGuard)
  @Patch('edit/:id')
  editProduct(
    @Param('id', ParseIntPipe) productId: number,
    @Body() dto: EditProductDto,
  ) {
    return this.productService.editProduct(productId, dto);
  }

  @UseGuards(JwtGuard)
  @Delete('delete/:id')
  deleteProduct(@Param('id', ParseIntPipe) productId: number) {
    return this.productService.deleteProduct(productId);
  }
}
