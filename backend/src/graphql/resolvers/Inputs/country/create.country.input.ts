import { Field, InputType } from 'type-graphql'
import { Country } from '../../../../models/country.models'
import { IsNotEmpty } from 'class-validator'

@InputType()
export class CreateCountryInput implements Partial<Country> {
  @Field(() => String)
  @IsNotEmpty()
  nombre: string
}
