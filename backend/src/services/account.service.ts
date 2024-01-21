import { AccounttaModel } from '../models/account.models'

export const accountService = {
  abtenerTodaLasCuentas: async () => {
    return await AccounttaModel.find().populate('id_cliente')
  },

  crearCuenta: async (entity: object) => {
    return await AccounttaModel.create(entity)
  },

  obtenerCuentaPorId: async (id: string) => {
    return await AccounttaModel.findById(id)
  },

  eliminarCuentaPorId: async (id: string) => {
    return await AccounttaModel.findByIdAndDelete(id)
  },

  actualizarCuentaPorId: async (id: string, entity: object) => {
    return await AccounttaModel.findByIdAndUpdate(id, entity, { new: true })
  }
}
