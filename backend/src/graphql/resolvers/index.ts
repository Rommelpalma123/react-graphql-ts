import { UserResolver } from './user.resolvers'
import { AccountResolver } from './resolver-account/account.resolver'
import { CityResolver } from './resolver-city/city.resolver'
import { ClientResolver } from './resolver-client/client.resolver'
import { CountryResolver } from './resolver-country/country.resolver'
import { ProcedureResolver } from './resolver-procedure/procedure.resolver'
import { RegisterResolver } from './resolver-register/register.resolver'

export const resolvers = [
  UserResolver,
  AccountResolver,
  CityResolver,
  ClientResolver,
  CountryResolver,
  ProcedureResolver,
  RegisterResolver
] as const
