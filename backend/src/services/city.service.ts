import { CityModel } from '../models/city.models'

export const cityService = {
  abtenerTodaLasCiudades: async () => {
    return await CityModel.find().populate('id_pais')
  },

  crearCiudad: async (entity: object) => {
    return await CityModel.create(entity)
  },

  obtenerCiudadPorId: async (id: string) => {
    return await CityModel.findById(id)
  },

  eliminarCiudadPorId: async (id: string) => {
    return await CityModel.findByIdAndDelete(id)
  },

  actualizarCiudadPorId: async (id: string, entity: object) => {
    return await CityModel.findByIdAndUpdate(id, entity, { new: true })
  }
}
