import { ObjectType, Field } from 'type-graphql'
import {
  prop as Property,
  getModelForClass,
  modelOptions
} from '@typegoose/typegoose'
import { Schema } from 'mongoose'
import { Country } from './country.models'
// import { Country } from './country.models'
@ObjectType({ description: 'Client model' })
@modelOptions({ schemaOptions: { timestamps: true } })
export class Client {
  @Field(() => String)
  @Property({ required: true })
  nombre: string

  @Field(() => String)
  @Property({ required: true })
  cedula: string

  @Field(() => String)
  @Property({ required: true })
  edad: string

  @Field(() => String)
  @Property({ required: true })
  email: string

  @Field(() => String)
  @Property({ required: true })
  password: string

  @Field(() => Country)
  @Property({ type: Schema.Types.ObjectId, ref: 'Country', required: true })
  id_pais: Country
}

export const ClientModel = getModelForClass(Client)
