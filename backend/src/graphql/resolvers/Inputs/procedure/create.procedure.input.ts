import { Field, InputType } from 'type-graphql'
import { Procedure } from '../../../../models/procedure.models'
import { IsNotEmpty } from 'class-validator'

@InputType()
export class CreateProcedureInput implements Partial<Procedure> {
  @Field(() => String)
  @IsNotEmpty()
  descripcion: string

  @Field(() => Number)
  @IsNotEmpty()
  costo: number
}
