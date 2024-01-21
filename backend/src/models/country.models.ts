import { ObjectType, Field } from 'type-graphql'
import {
  prop as Property,
  getModelForClass,
  modelOptions
} from '@typegoose/typegoose'

@ObjectType({ description: 'Country model' })
@modelOptions({ schemaOptions: { timestamps: true } })
export class Country {
  @Field(() => String)
  @Property({ required: true })
  nombre: string
}

export const CountryModel = getModelForClass(Country)
