import { Resolver, Mutation, Arg, Query } from 'type-graphql'
import { City } from '../../../models/index.models'
import { CreateCityInput } from '../Inputs/city/create.city.input'
import { CityService } from '../../services/city.service'
import { UpdateCityInput } from '../Inputs/city/update.city.input'

@Resolver(() => City)
export class CityResolver {
  constructor(private readonly cityService: CityService) {
    this.cityService = new CityService()
  }

  @Mutation(() => City)
  async createCity(@Arg('createCity') createCityInput: CreateCityInput) {
    return await this.cityService.createCity(createCityInput)
  }

  @Query(() => [City], { name: 'allCities' })
  async allCities() {
    return await this.cityService.findAllCities()
  }

  @Query(() => City, { name: 'findCityById' })
  async findCity(@Arg('id') id: string): Promise<City | null> {
    return await this.cityService.findOneCity(id)
  }

  @Mutation(() => City, { name: 'deleleCity' })
  async deleteCity(@Arg('id') id: string): Promise<City | null> {
    return await this.cityService.deleteCity(id)
  }

  @Mutation(() => City, { name: 'updateCity' })
  async updateCity(
    @Arg('id') id: string,
    @Arg('updateCityInput') updateCityInput: UpdateCityInput
  ): Promise<City | null> {
    return await this.cityService.updateCity(id, updateCityInput)
  }
}
