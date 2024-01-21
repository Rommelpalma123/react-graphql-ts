import { IsNotEmpty } from 'class-validator'
import { Field, InputType } from 'type-graphql'

@InputType()
export class UpdateAccountInput {
  @Field(() => String)
  @IsNotEmpty()
  descripcion: string
}
