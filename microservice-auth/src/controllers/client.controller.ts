import { clientService } from '../services/client.service'
import { Response, Request } from 'express'

export const clienteController = {
  iniciarSession: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body

      if (!email || !password) {
        return res
          .status(400)
          .json({ message: 'Correo electrónico y contraseña son obligatorios' })
      }

      const client = await clientService.login(email, password)
      return res.json(client)
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message)

      return res.status(400).json({
        message: error.message
      })
    }
  }
}
