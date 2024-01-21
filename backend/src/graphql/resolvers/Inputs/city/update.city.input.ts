import { IsNotEmpty } from 'class-validator'
import { Field, ID, InputType } from 'type-graphql'

@InputType()
export class UpdateCityInput {
  @Field(() => String)
  @IsNotEmpty()
  nombre: string

  @Field(() => ID)
  @IsNotEmpty()
  id_pais: string
}
