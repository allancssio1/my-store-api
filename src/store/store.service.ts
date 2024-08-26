import { Injectable } from '@nestjs/common'
import { CreateStoreDto } from './dto/create-store.dto'
import { UpdateStoreDto } from './dto/update-store.dto'
import { PrismaService } from '@/database/prisma/prisma.service'
import { Slug } from '@/value-objects/Slug'

@Injectable()
export class StoreService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createStoreDto: CreateStoreDto) {
    const slug = Slug.createFromText(createStoreDto.name)
    const store = await this.prisma.store.create({
      data: {
        ...createStoreDto,
        slug: slug.value,
      },
    })
    return store ?? null
  }

  async findAll() {
    const stores = await this.prisma.store.findMany()

    return stores ?? []
  }

  async findOne(id: string) {
    const store = await this.prisma.store.findUnique({ where: { id } })
    return store ?? null
  }

  async update(id: string, updateStoreDto: UpdateStoreDto) {
    const store = await this.prisma.store.update({
      where: { id },
      data: updateStoreDto,
    })
    return store ?? null
  }

  async remove(id: string) {
    await this.prisma.store.delete({ where: { id } })
  }
}
