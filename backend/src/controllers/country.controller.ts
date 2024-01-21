import { Response, Request } from 'express'
import { countryService } from '../services/country.service'

export const paisController = {
  nuevoPais: async (req: Request, res: Response) => {
    try {
      const data = await countryService.crearPais(req.body)
      console.log('data', data)
      return res.json(data)
    } catch (error: any) {
      console.log(error)
      return res.status(400).json({
        message: error.message
      })
    }
  },

  mostrarPaises: async (_req: Request, res: Response) => {
    try {
      const paises = await countryService.abtenerTodoLosPaises()
      return res.json(paises)
    } catch (error: any) {
      console.log(error)
      return res.status(400).json({
        message: error.message
      })
    }
  },

  mostrarPais: async (req: Request, res: Response) => {
    try {
      const pais = await countryService.obtenerPaisPorId(req.params.idPais)
      if (!pais) {
        res.json({ mensaje: 'El pais no existe' })
      }
      return res.json(pais)
    } catch (error: any) {
      return res.status(400).json({
        message: error.message
      })
    }
  },

  actualizarPais: async (req: Request, res: Response) => {
    try {
      const pais = await countryService.actualizarPaisPorId(
        req.params.idPais,
        req.body
      )
      return res.json(pais)
    } catch (error: any) {
      return res.status(400).json({
        message: error.message
      })
    }
  },

  eliminarPais: async (req: Request, res: Response) => {
    try {
      const data = await countryService.eliminarPaisPorId(req.params.idPais)
      return res.json(data)
    } catch (error: any) {
      return res.status(400).json({
        message: error.message
      })
    }
  }
}
