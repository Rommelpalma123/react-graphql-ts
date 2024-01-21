import { RegisterModel } from '../models/register.models'

export const registerService = {
  abtenerTodosLosRegistros: async () => {
    return await RegisterModel.find().populate('id_cliente id_tramite')
  },

  crearRegistro: async (entity: object) => {
    return await RegisterModel.create(entity)
  },

  obtenerRegistroPorId: async (id: string) => {
    return await RegisterModel.findById(id)
  },

  eliminarRegistrPorId: async (id: string) => {
    return await RegisterModel.findByIdAndDelete(id)
  },

  actualizarResgistroPorId: async (id: string, entity: object) => {
    return await RegisterModel.findByIdAndUpdate(id, entity, { new: true })
  }
}
