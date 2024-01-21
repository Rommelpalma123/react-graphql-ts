import http from 'http'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { connectDB } from './database/database'
import { router } from './routes/index.routes'
import swaggerExpress from 'swagger-ui-express'
import swaggerDoc from 'swagger-jsdoc'
import { swaggerOptions } from './docs/index'
export class Server {
  private app

  constructor() {
    this.app = express()
    connectDB()
    this.configuration()
    this.middlewares()
    this.routes()
  }

  private configuration() {
    this.app.set('port', process.env.PORT || 4000)
    const spec = swaggerDoc(swaggerOptions)
    this.app.use('/swagger', swaggerExpress.serve, swaggerExpress.setup(spec))
  }

  private middlewares() {
    this.app.use(morgan('dev'))
    this.app.use(cors())
    this.app.use(express.json())
  }

  routes() {
    this.app.get('/', (_req, res) => {
      res.status(200).json({
        name: 'API REST MiCROSERVICIO'
      })
    })
    this.app.use('/api/v2', router.login)
  }

  public listen() {
    const server = http.createServer(this.app)

    server.listen(this.app.get('port'), () => {
      console.log(
        `Server está corriendo en el puerto http://localhost:${this.app.get(
          'port'
        )}`
      )
    })
  }
}
