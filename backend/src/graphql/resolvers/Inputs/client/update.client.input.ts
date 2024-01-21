import { IsNotEmpty } from 'class-validator'
import { Field, InputType } from 'type-graphql'

@InputType()
export class UpdateClientInput {
  @Field(() => String)
  @IsNotEmpty()
  nombre: string

  @Field(() => String)
  @IsNotEmpty()
  cedula: string

  @Field(() => String)
  edad: string

  @Field(() => String)
  @IsNotEmpty()
  id_pais: string
}
