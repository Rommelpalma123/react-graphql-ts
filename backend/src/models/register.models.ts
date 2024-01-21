import { ObjectType, Field, ID } from 'type-graphql'
import {
  prop as Property,
  getModelForClass,
  modelOptions
} from '@typegoose/typegoose'
import { Schema } from 'mongoose'
import { Client } from './client.models'
import { Procedure } from './procedure.models'

@ObjectType({ description: 'Register model' })
@modelOptions({ schemaOptions: { timestamps: true } })
export class Register {
  @Field(() => ID)
  @Property({ type: Schema.Types.ObjectId, ref: 'Client', required: true })
  id_cliente: Client

  @Field(() => ID)
  @Property({ type: Schema.Types.ObjectId, ref: 'Procedure', required: true })
  id_tramite: Procedure

  @Field(() => Date)
  @Property()
  fecha: Date
}

export const RegisterModel = getModelForClass(Register)
