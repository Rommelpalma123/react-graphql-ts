import { InputType, Field } from 'type-graphql'
import { Account } from '../../../../models/account.models'
import { IsNotEmpty } from 'class-validator'
import { CreateClientInput } from '../client/create.client.input'

@InputType()
export class CreateAccountInput implements Partial<Account> {
  @Field(() => String)
  @IsNotEmpty()
  descripcion: string

  @Field(() => CreateClientInput)
  @IsNotEmpty()
  id_cliente: CreateClientInput
}
