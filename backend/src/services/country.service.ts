import { CountryModel } from '../models/country.models'

export const countryService = {
  abtenerTodoLosPaises: async () => {
    return await CountryModel.find()
  },

  crearPais: async (entity: object) => {
    return await CountryModel.create(entity)
  },

  obtenerPaisPorId: async (id: string) => {
    return await CountryModel.findById(id)
  },

  eliminarPaisPorId: async (id: string) => {
    return await CountryModel.findByIdAndDelete(id).exec()
  },

  actualizarPaisPorId: async (id: string, entity: object) => {
    return await CountryModel.findByIdAndUpdate(id, entity, { new: true })
  }
}
