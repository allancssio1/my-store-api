import { Injectable } from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { PrismaService } from '@/database/prisma/prisma.service'
import { Slug } from '@/value-objects/Slug'

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    const product = await this.prisma.product.create({
      data: {
        ...createProductDto,
        slug: Slug.createFromText(createProductDto.title).value,
      },
    })
    return product ?? null
  }

  async findAll() {
    const products = await this.prisma.product.findMany()
    return products ?? []
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
    })
    return product ?? null
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    })
    return product ?? null
  }

  async remove(id: string) {
    await this.prisma.product.delete({ where: { id } })
  }
}
