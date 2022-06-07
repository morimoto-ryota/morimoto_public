import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { HideField } from '@nestjs/graphql';

@InputType()
export class TodoCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    title!: string;

    @Field(() => String, {nullable:false})
    contents!: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;
}
