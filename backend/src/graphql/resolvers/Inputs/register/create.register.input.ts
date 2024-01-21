import { Field, ID, InputType } from 'type-graphql'
import { Register } from '../../../../models/register.models'
import { CreateClientInput } from '../client/create.client.input'
import { CreateProcedureInput } from '../procedure/create.procedure.input'

@InputType()
export class CreateRegisterInput implements Partial<Register> {
  @Field(() => ID)
  id_cliente: CreateClientInput

  @Field(() => ID)
  id_tramite: CreateProcedureInput

  @Field(() => Date)
  fecha!: Date
}
