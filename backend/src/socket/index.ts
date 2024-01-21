import { Server, Socket } from 'socket.io'
import { procedureModelService } from '../services/procedure.service'

export function createSocketServer(io: Server) {
  io.on('connection', (socket: Socket) => {
    console.log('Nuevo cliente conectado')

    const emitTramites = async () => {
      const tramites = await procedureModelService.abtenerTodoLosTramites()
      socket.emit('server:loadtramites', tramites)
    }
    emitTramites()

    socket.on('client:realizar-tramite', async (data) => {
      socket.broadcast.emit('client:realizar-tramite', data)
      const newTramite = await procedureModelService.crearTramite(data)
      io.emit('server:realizar-tramite', newTramite)
    })

    socket.on('cliente:delete-tramite', async (id) => {
      await procedureModelService.eliminarTramitePorId(id)
      io.emit('server:delete-tramite', id)
    })

    socket.on('disconnect', () => {
      console.log('Cliente desconectado')
    })

    io.on('connection_error', (error) => {
      console.log('Error en el socket', error.req)
      console.log(error.code)
      console.log(error.message)
    })
  })
}
