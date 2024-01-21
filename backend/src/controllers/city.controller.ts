import { cityService } from '../services/city.service'
import { Response, Request } from 'express'

export const ciudadController = {
  nuevaCiudad: async (req: Request, res: Response) => {
    try {
      const data = await cityService.crearCiudad(req.body)
      return res.json(data)
    } catch (error: any) {
      return res.status(400).json({
        message: error.message
      })
    }
  },

  mostrarCiudades: async (_req: Request, res: Response) => {
    try {
      const data = await cityService.abtenerTodaLasCiudades()
      console.log('controller ciudad', data)
      return res.json(data)
    } catch (error: any) {
      console.log('error ciudad', error.message)
      return res.status(400).json({
        message: error.message
      })
    }
  },

  mostrarCiudad: async (req: Request, res: Response) => {
    try {
      const ciudad = await cityService.obtenerCiudadPorId(req.params.idCiudad)
      return res.json(ciudad)
    } catch (error) {
      console.log('error ciudad', error.message)

      return res.status(400).json({
        message: error.message
      })
    }
  },

  actualizarCiudad: async (req: Request, res: Response) => {
    try {
      const ciudad = await cityService.actualizarCiudadPorId(
        req.params.idCiudad,
        req.body
      )
      return res.json(ciudad)
    } catch (error: any) {
      return res.status(400).json({
        message: error.message
      })
    }
  },

  eliminarCiudad: async (req: Request, res: Response) => {
    try {
      const data = await cityService.eliminarCiudadPorId(req.params.idCiudad)
      return res.json(data)
    } catch (error: any) {
      return res.status(400).json({
        message: error.message
      })
    }
  }
}
