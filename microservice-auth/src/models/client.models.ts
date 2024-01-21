import {
  prop as Property,
  getModelForClass,
  modelOptions
} from '@typegoose/typegoose'
import { Schema } from 'mongoose'
import { Country } from './country.models'

@modelOptions({ schemaOptions: { timestamps: true } })
export class Client {
  @Property({ required: true })
  nombre: string

  @Property({ required: true })
  cedula: string

  @Property({ required: true })
  edad: string

  @Property({ required: true })
  email: string

  @Property({ required: true })
  password: string

  @Property({ type: Schema.Types.ObjectId, ref: 'Country', required: true })
  id_pais: Country
}

export const ClientModel = getModelForClass(Client)
