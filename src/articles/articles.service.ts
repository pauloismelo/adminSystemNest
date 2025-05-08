import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticlesService {

  constructor(private readonly prisma: PrismaService) {}

  async create(createArticleDto: CreateArticleDto) {

    if (!createArticleDto) throw new UnauthorizedException('Body is required');
    return await this.prisma.articles.create({
      data: createArticleDto 
    })
  }

  async findAll() {
    return await this.prisma.articles.findMany({});
  }

  async findOne(id: number) {
    if (!id) throw new UnauthorizedException('Id is required');

    return await this.prisma.articles.findUnique({
      where: {id}
    });
  }

  async update(id: number, updateArticleDto: UpdateArticleDto) {

    if (!id) throw new UnauthorizedException('Id is required');
    if (!updateArticleDto) throw new UnauthorizedException('Body is required');
    return await this.prisma.articles.update({
      where: {id},
      data: updateArticleDto
    });
  }

  async remove(id: number) {
    if (!id) throw new UnauthorizedException('Id is required');
    return await this.prisma.articles.delete({
      where: {id}
    })
  }
}
