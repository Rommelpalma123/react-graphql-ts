import { Field, InputType, ID } from 'type-graphql'
import { City } from '../../../../models/city.models'
import { IsNotEmpty } from 'class-validator'
import { CreateCountryInput } from '../country/create.country.input'

@InputType()
export class CreateCityInput implements Partial<City> {
  @Field(() => String)
  @IsNotEmpty()
  nombre: string

  @Field(() => ID)
  @IsNotEmpty()
  id_pais: CreateCountryInput
}
