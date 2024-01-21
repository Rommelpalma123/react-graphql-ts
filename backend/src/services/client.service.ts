import { ClientModel } from '../models/client.models'
import * as bcrypt from 'bcrypt'

export const clientService = {
  abtenerTodoLosClientes: async () => {
    return await ClientModel.find().populate('id_pais')
  },

  findOne: async (filter: object) => {
    return await ClientModel.findOne(filter)
  },

  crearCliente: async (entity: object) => {
    return await ClientModel.create(entity)
  },

  obtenerClientePorId: async (id: string) => {
    return await ClientModel.findById(id)
  },

  eliminarClientePorId: async (id: string) => {
    return await ClientModel.findByIdAndDelete(id)
  },

  actualizarClientePorId: async (id: string, entity: object) => {
    return await ClientModel.findByIdAndUpdate(id, entity, { new: true })
  },

  login: async (email: string, password: string) => {
    const cliente = await ClientModel.findOne({ email })
    if (!cliente) {
      throw new Error('Usuario no encontrado')
    }

    const passwordMatches = await bcrypt.compare(password, cliente.password)

    if (!passwordMatches) {
      throw new Error('Contraseña incorrecta')
    }

    return cliente
  }
}
