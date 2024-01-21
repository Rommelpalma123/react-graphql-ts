import { Field, InputType } from 'type-graphql'
import { Client } from '../../../../models/client.models'
import { IsNotEmpty } from 'class-validator'
import { CreateCountryInput } from '../country/create.country.input'
@InputType()
export class CreateClientInput implements Partial<Client> {
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
  email: string

  @Field(() => String)
  @IsNotEmpty()
  password: string

  @Field(() => CreateCountryInput)
  @IsNotEmpty()
  id_pais: CreateCountryInput
}
