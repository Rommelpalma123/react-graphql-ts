import { Resolver, Mutation, Arg, Query } from 'type-graphql'
import { Country } from '../../../models/index.models'
import { CreateCountryInput } from '../Inputs/country/create.country.input'
import { CountryService } from '../../services/country.service'
import { UpdateCountryInput } from '../Inputs/country/update.country.input'

@Resolver(() => Country)
export class CountryResolver {
  constructor(private readonly countryService: CountryService) {
    this.countryService = new CountryService()
  }

  @Mutation(() => Country)
  async createCountry(
    @Arg('createCountry') createCountryInput: CreateCountryInput
  ) {
    return await this.countryService.createCountry(createCountryInput)
  }

  @Query(() => [Country], { name: 'allCountry' })
  async allCountry() {
    return await this.countryService.findAllCountry()
  }

  @Query(() => Country, { name: 'findCountryById' })
  async findCountry(@Arg('id') id: string): Promise<Country | null> {
    return await this.countryService.findOneCountry(id)
  }

  @Mutation(() => Country, { name: 'deleleCountry' })
  async deleteCountry(@Arg('id') id: string): Promise<Country | null> {
    return await this.countryService.deleteCountry(id)
  }

  @Mutation(() => Country, { name: 'updateCountry' })
  async updateCountry(
    @Arg('id') id: string,
    @Arg('updateCountryInput') updateCountryInput: UpdateCountryInput
  ): Promise<Country | null> {
    return await this.countryService.updateCountry(id, updateCountryInput)
  }
}
