import { ObjectType, Field, ID } from 'type-graphql'
import {
  prop as Property,
  getModelForClass,
  modelOptions
} from '@typegoose/typegoose'
import { Schema } from 'mongoose'
import { Client } from './client.models'

@ObjectType({ description: 'Account model' })
@modelOptions({ schemaOptions: { timestamps: true } })
export class Account {
  @Field(() => String)
  @Property({ required: true })
  descripcion: string

  @Field(() => ID)
  @Property({ type: Schema.Types.ObjectId, ref: 'Client', required: true })
  id_cliente: Client
}

export const AccounttaModel = getModelForClass(Account)
