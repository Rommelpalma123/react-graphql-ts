import { Response, Request } from 'express'
const bcrypt = require('bcrypt')
import { userService } from '../services/user.service'

export const userController = {
  create: async (req: Request, res: Response) => {
    try {
      const { email, password, phone, name, surname } = req.body

      if (!email || !password || !phone || !name || !surname) {
        return res.status(400).json({ error: 'Faltan campos requeridos' })
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        return res
          .status(400)
          .json({ error: 'El correo electrónico no es válido' })
      }

      if (phone.length !== 10) {
        return res
          .status(400)
          .json({ error: 'El teléfono debe tener 10 dígitos' })
      }

      const existingUser = await userService.findOne({ email })
      if (existingUser) {
        return res
          .status(400)
          .json({ error: 'El correo electrónico ya está registrado' })
      }

      const hashedPassword = await bcrypt.hash(password, 10)
      req.body.password = hashedPassword

      await userService.create(req.body)
      return res
        .status(200)
        .json({ message: 'Usuario registrado exitosamente' })
    } catch (error) {
      return res.status(500).json({ error: 'Error al registrar el usuario' })
    }
  }
}
