import { Field, ID, InputType } from 'type-graphql'

@InputType()
export class UpdateRegisterInput {
  @Field(() => ID)
  id_cliente: string

  @Field(() => ID)
  id_tramite: string

  @Field(() => String)
  fecha: string
}
