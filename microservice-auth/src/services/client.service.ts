import { ClientModel } from '../models/client.models'
import * as bcrypt from 'bcrypt'

export const clientService = {
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
