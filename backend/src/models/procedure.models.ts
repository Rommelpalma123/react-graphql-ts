import { ObjectType, Field } from 'type-graphql'
import {
  prop as Property,
  getModelForClass,
  modelOptions
} from '@typegoose/typegoose'

@ObjectType({ description: 'Procedure model' })
@modelOptions({ schemaOptions: { timestamps: true } })
export class Procedure {
  @Field(() => String)
  @Property({ required: true })
  descripcion: string

  @Field(() => Number)
  @Property({ required: true })
  costo: number
}

export const ProcedureModel = getModelForClass(Procedure)
