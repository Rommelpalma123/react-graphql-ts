import { ProcedureModel } from '../models/procedure.models'

export const procedureModelService = {
  abtenerTodoLosTramites: async () => {
    return await ProcedureModel.find()
  },

  crearTramite: async (entity: object) => {
    return await ProcedureModel.create(entity)
  },

  obtenerTramitePorId: async (id: string) => {
    return await ProcedureModel.findById(id)
  },

  eliminarTramitePorId: async (id: string) => {
    return await ProcedureModel.findByIdAndDelete(id)
  },

  actualizarTramitePorId: async (id: string, entity: object) => {
    return await ProcedureModel.findByIdAndUpdate(id, entity, { new: true })
  }
}
