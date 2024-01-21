import { ObjectType, Field, ID } from 'type-graphql'
import {
  prop as Property,
  getModelForClass,
  modelOptions
} from '@typegoose/typegoose'
//import bcrypt from "bcrypt";

@ObjectType({ description: 'User model' })
@modelOptions({ schemaOptions: { timestamps: true } })
export class User {
  @Field(() => ID)
  id: string

  @Field(() => String)
  @Property({ required: true })
  name: string

  @Field(() => String)
  @Property({ required: true })
  surname: string

  @Field(() => String)
  @Property({ required: true })
  phone: string

  @Field(() => String)
  @Property({ required: true })
  email: string

  @Field(() => String)
  @Property({ required: true })
  password: string
}

export const userModel = getModelForClass(User)
