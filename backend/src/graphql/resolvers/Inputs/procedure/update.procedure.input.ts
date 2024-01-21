import { IsNotEmpty } from 'class-validator'
import { Field, InputType } from 'type-graphql'

@InputType()
export class UpdateProcedureInput {
  @Field(() => String)
  @IsNotEmpty()
  descripcion: string

  @Field(() => String)
  @IsNotEmpty()
  costo: string
}
