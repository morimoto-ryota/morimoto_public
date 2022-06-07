import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosResolver } from './todos.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [TodosService, TodosResolver, PrismaService],
  exports: [TodosService]
})
export class TodosModule {}
