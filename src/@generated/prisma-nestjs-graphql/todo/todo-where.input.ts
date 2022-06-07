import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class TodoWhereInput {

    @Field(() => [TodoWhereInput], {nullable:true})
    AND?: Array<TodoWhereInput>;

    @Field(() => [TodoWhereInput], {nullable:true})
    OR?: Array<TodoWhereInput>;

    @Field(() => [TodoWhereInput], {nullable:true})
    NOT?: Array<TodoWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    contents?: StringFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;
}
