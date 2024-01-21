import { registerService } from '../services/register.service'
import { Response, Request } from 'express'

export const registroController = {
  nuevoRegistro: async (req: Request, res: Response) => {
    try {
      const registro = await registerService.crearRegistro(req.body)
      return res.json(registro)
    } catch (error: any) {
      console.log(error)
      return res.status(400).json({
        message: error.message
      })
    }
  },

  mostrarTodosLosRegistro: async (_req: Request, res: Response) => {
    try {
      const registros = await registerService.abtenerTodosLosRegistros()
      return res.json(registros)
    } catch (error: any) {
      console.log(error)
      return res.status(400).json({
        message: error.message
      })
    }
  },

  mostrarRegistro: async (req: Request, res: Response) => {
    try {
      const registro = await registerService.obtenerRegistroPorId(
        req.params.idRegistro
      )
      return res.json(registro)
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        message: error.message
      })
    }
  },

  actualizarRegistro: async (req: Request, res: Response) => {
    try {
      const registro = await registerService.actualizarResgistroPorId(
        req.params.idRegistro,
        req.body
      )
      return res.json(registro)
    } catch (error: any) {
      console.log(error)
      return res.status(400).json({
        message: error.message
      })
    }
  },

  eliminarRegistro: async (req: Request, res: Response) => {
    try {
      const data = await registerService.eliminarRegistrPorId(
        req.params.idRegistro
      )
      return res.json(data)
    } catch (error: any) {
      console.log(error)
      return res.status(400).json({
        message: error.message
      })
    }
  }
}
