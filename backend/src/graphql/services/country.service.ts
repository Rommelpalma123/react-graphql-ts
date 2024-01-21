import { Country, CountryModel } from '../../models/country.models'
import { CreateCountryInput } from '../resolvers/Inputs/country/create.country.input'
import { UpdateCountryInput } from '../resolvers/Inputs/country/update.country.input'

export class CountryService {
  async createCountry(createClientInput: CreateCountryInput) {
    const newCountry = CountryModel.create(createClientInput)
    return (await newCountry).save()
  }

  async findAllCountry(): Promise<Country[] | null> {
    return await CountryModel.find()
  }

  async findOneCountry(id: string): Promise<Country | null> {
    const country = CountryModel.findById(id)
    if (!country) {
      throw new Error('country not found')
    }
    return country
  }

  async deleteCountry(id: string): Promise<Country | null> {
    const country = await CountryModel.findByIdAndDelete(id)
    if (!country) {
      throw new Error('country not found to delete')
    }
    return country
  }
  async updateCountry(
    id: string,
    updatePaisInput: UpdateCountryInput
  ): Promise<Country | null> {
    const updateCountry = await CountryModel.findByIdAndUpdate(
      id,
      updatePaisInput,
      {
        new: true
      }
    )
    if (!updateCountry) {
      throw new Error('country not found to update')
    }
    await updateCountry.save()
    return updateCountry
  }
}
