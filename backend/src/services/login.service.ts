import { userModel } from '../models/user.model'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const LoginService = {
  loginUser: async (email: string, password: string) => {
    const user = await userModel.findOne({ email })

    if (!user) {
      throw new Error('Usuario no encontrado')
    }

    const passwordMatches = await bcrypt.compare(password, user.password)

    if (!passwordMatches) {
      throw new Error('Contraseña incorrecta')
    }

    const token = jwt.sign({ userId: user.id }, 'secretKey', {
      expiresIn: '1h'
    })
    return token
  }
}
