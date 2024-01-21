import { InputType, Field } from 'type-graphql'
import { User } from '../../../models/index.models'
import { IsNotEmpty } from 'class-validator'

@InputType()
export class CreateUserInput implements Partial<User> {
  @Field(() => String)
  @IsNotEmpty()
  name: string

  @Field(() => String)
  @IsNotEmpty()
  surname: string

  @Field(() => String)
  @IsNotEmpty()
  phone: string

  @Field(() => String)
  @IsNotEmpty()
  email: string

  @Field(() => String)
  @IsNotEmpty()
  password: string
}
