import { clientService } from '../services/client.service'
import { Response, Request } from 'express'
import * as bcrypt from 'bcrypt'

export const clienteController = {
  nuevoCliente: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: 'Correo no valido' })
      }

      const existingUser = await clientService.findOne({ email })
      if (existingUser) {
        return res
          .status(400)
          .json({ error: 'El correo electrónico ya está registrado' })
      }

      const hashedPassword = await bcrypt.hash(password, 10)
      req.body.password = hashedPassword

      const data = await clientService.crearCliente(req.body)
      return res.json(data)
    } catch (error: any) {
      return res.status(400).json({
        message: error.message
      })
    }
  },

  mostrarClientes: async (_req: Request, res: Response) => {
    try {
      const clientes = await clientService.abtenerTodoLosClientes()
      return res.json(clientes)
    } catch (error: any) {
      return res.status(400).json({
        message: error.message
      })
    }
  },

  mostrarCliente: async (req: Request, res: Response) => {
    try {
      console.log('Parámetros de la solicitud:', req.params)
      const cliente = await clientService.obtenerClientePorId(
        req.params.idCliente
      )
      console.log('cliente controler', cliente)

      if (!cliente) {
        return res.status(404).json({ message: 'Cliente no encontrado' })
      }

      return res.json(cliente)
    } catch (error) {
      console.log('error al encontrar el cliente', error.message)
      return res.status(400).json({
        message: error.message
      })
    }
  },

  actualizarCliente: async (req: Request, res: Response) => {
    try {
      const cliente = await clientService.actualizarClientePorId(
        req.params.idCliente,
        req.body
      )
      return res.json(cliente)
    } catch (error: any) {
      return res.status(400).json({
        message: error.message
      })
    }
  },

  eliminarCliente: async (req: Request, res: Response) => {
    try {
      const data = await clientService.eliminarClientePorId(
        req.params.idCliente
      )
      return res.json(data)
    } catch (error: any) {
      return res.status(400).json({
        message: error.message
      })
    }
  },

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
