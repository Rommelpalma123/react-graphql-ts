import { accountService } from '../services/account.service'
import { Response, Request } from 'express'

export const tipoCuentaController = {
  nuevoTipocuenta: async (req: Request, res: Response) => {
    try {
      const data = await accountService.crearCuenta(req.body)
      return res.json(data)
    } catch (error: any) {
      console.log(error)
      return res.status(400).json({
        message: error.message
      })
    }
  },

  mostrarTipocuentas: async (_req: Request, res: Response) => {
    try {
      const tipocuenta = await accountService.abtenerTodaLasCuentas()
      return res.json(tipocuenta)
    } catch (error: any) {
      console.log(error)
      return res.status(400).json({
        message: error.message
      })
    }
  },

  mostrarTipocuenta: async (req: Request, res: Response) => {
    try {
      const tipocuenta = await accountService.obtenerCuentaPorId(
        req.params.idTipocuenta
      )
      return res.json(tipocuenta)
    } catch (error) {
      console.log(error)
      return res.status(400).json({
        message: error.message
      })
    }
  },

  actualizarTipocuenta: async (req: Request, res: Response) => {
    try {
      const tipocuenta = await accountService.actualizarCuentaPorId(
        req.params.idTipocuenta,
        req.body
      )
      return res.json(tipocuenta)
    } catch (error: any) {
      console.log(error)
      return res.status(400).json({
        message: error.message
      })
    }
  },

  eliminarTipocuenta: async (req: Request, res: Response) => {
    try {
      const data = await accountService.eliminarCuentaPorId(
        req.params.idTipocuenta
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
