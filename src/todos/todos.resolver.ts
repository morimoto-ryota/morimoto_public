import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import * as bcrypt from 'bcrypt';
import { Todo } from 'src/@generated/prisma-nestjs-graphql/todo/todo.model'
import { CreateOneTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/create-one-todo.args';
import { TodosService } from 'src/todos/todos.service';
import { FindFirstTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-first-todo.args';
import { DeleteOneTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/delete-one-todo.args';
import { UpdateOneTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/update-one-todo.args';
import { FindUniqueTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-unique-todo.args';
import { FindManyTodoArgs } from 'src/@generated/prisma-nestjs-graphql/todo/find-many-todo.args';

@Resolver(() => Todo)
export class TodosResolver {
    constructor(private readonly todoService: TodosService) {}

    @Query(() => Todo)
    todo(
        @Args() args: FindFirstTodoArgs
    ) {
        return this.todoService.findFirst(args)
    }

    @Query(() => Todo)
    todo2(
        @Args() args: FindUniqueTodoArgs
    ) {
        return this.todoService.findUnique(args)
    }

    @Query(() => Todo)
    all(
        @Args() args: FindManyTodoArgs
    ) {
        return this.todoService.findMany(args)
    }

    @Mutation(() => Todo)
    async createTodo(
        @Args() args: CreateOneTodoArgs
    ) {
        //args.data.password = await bcrypt.hash(args.data.password, 10);
        return this.todoService.createTodo(args);
    }

    @Mutation(() => Todo)
    async deleteTodo(
        @Args() Args: DeleteOneTodoArgs
    ) {
        return this.todoService.deleteTodo(Args);
    }

    @Mutation(() => Todo)
    async updateTodo(
        @Args() Args: UpdateOneTodoArgs
    ) {
        return this.todoService.updateTodo(Args);
    }
}