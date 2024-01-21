import { procedureModelService } from '../services/procedure.service'
import { Response, Request } from 'express'

export const tramiteController = {
  nuevoTramite: async (req: Request, res: Response) => {
    try {
      const data = await procedureModelService.crearTramite(req.body)
      return res.json(data)
    } catch (error: any) {
      console.log(error)
      return res.status(400).json({
        message: error.message
      })
    }
  },

  mostrarTodosLosTramite: async (_req: Request, res: Response) => {
    try {
      const tramite = await procedureModelService.abtenerTodoLosTramites()
      return res.json(tramite)
    } catch (error: any) {
      console.log(error)
      return res.status(400).json({
        message: error.message
      })
    }
  },

  mostrarTramite: async (req: Request, res: Response) => {
    try {
      const tramite = await procedureModelService.obtenerTramitePorId(
        req.params.idTramite
      )
      return res.json(tramite)
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        message: error.message
      })
    }
  },

  actualizarTramite: async (req: Request, res: Response) => {
    try {
      const tramite = await procedureModelService.actualizarTramitePorId(
        req.params.idTramite,
        req.body
      )
      return res.json(tramite)
    } catch (error: any) {
      console.log(error)
      return res.status(400).json({
        message: error.message
      })
    }
  },

  eliminarTramite: async (req: Request, res: Response) => {
    try {
      const data = await procedureModelService.eliminarTramitePorId(
        req.params.idTramite
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
