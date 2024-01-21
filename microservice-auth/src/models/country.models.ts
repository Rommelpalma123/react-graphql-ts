import {
  prop as Property,
  getModelForClass,
  modelOptions
} from '@typegoose/typegoose'

@modelOptions({ schemaOptions: { timestamps: true } })
export class Country {
  @Property({ required: true })
  nombre: string
}

export const CountryModel = getModelForClass(Country)
