import { InputType, Field, ID } from 'type-graphql'

@InputType()
export class UpdateUserInput {
  @Field(() => ID)
  id: string

  @Field(() => String)
  name: string

  @Field(() => String)
  surname: string

  @Field(() => String)
  phone: string

  @Field(() => String)
  email: string
}
