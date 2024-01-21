import { CityModel, City } from '../../models/city.models'
import { CreateCityInput } from '../resolvers/Inputs/city/create.city.input'
import { UpdateCityInput } from '../resolvers/Inputs/city/update.city.input'

export class CityService {
  async createCity(createCityInput: CreateCityInput) {
    const newCity = CityModel.create(createCityInput)
    return (await newCity).save()
  }

  async findAllCities(): Promise<City[] | null> {
    return await CityModel.find()
  }

  async findOneCity(id: string): Promise<City | null> {
    const city = CityModel.findById(id)
    if (!city) {
      throw new Error('city not found')
    }
    return city
  }

  async deleteCity(id: string): Promise<City | null> {
    const city = await CityModel.findByIdAndDelete(id)
    if (!city) {
      throw new Error('city not found to delete')
    }
    return city
  }
  async updateCity(
    id: string,
    updateCityInput: UpdateCityInput
  ): Promise<City | null> {
    const updateCity = await CityModel.findByIdAndUpdate(id, updateCityInput, {
      new: true
    })
    if (!updateCity) {
      throw new Error('city not found to update')
    }
    await updateCity.save()
    return updateCity
  }
}
