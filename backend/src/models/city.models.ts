import { ObjectType, Field, ID } from 'type-graphql'
import {
  prop as Property,
  getModelForClass,
  modelOptions
} from '@typegoose/typegoose'
import { Schema } from 'mongoose'
import { Country } from './country.models'

@ObjectType({ description: 'City model' })
@modelOptions({ schemaOptions: { timestamps: true } })
export class City {
  @Field(() => String)
  @Property({ required: true })
  nombre: string

  @Field(() => ID)
  @Property({ type: Schema.Types.ObjectId, ref: 'Country', required: true })
  id_pais: Country
}

export const CityModel = getModelForClass(City)
