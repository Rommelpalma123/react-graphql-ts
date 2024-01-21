import http from 'http'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import { ApolloServer } from 'apollo-server-express'
import { connectDB } from './database/database'
import { buildSchema } from 'type-graphql'
import 'reflect-metadata'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { resolvers } from './graphql/resolvers/index'
import { Server as ServerSocket } from 'socket.io'
import { allRoutes } from './routes/index.routes'
import swaggerExpress from 'swagger-ui-express'
import swaggerDoc from 'swagger-jsdoc'
import { swaggerOptions } from './docs/index'
import { createSocketServer } from './socket'

export class Server {
  private app

  constructor() {
    this.app = express()
    connectDB()
    this.configuration()
    this.middlewares()
    this.routes()
    this.apolloServer()
  }

  private configuration() {
    this.app.set('port', 4000)
    const spec = swaggerDoc(swaggerOptions)
    this.app.use('/swagger', swaggerExpress.serve, swaggerExpress.setup(spec))
    this.app.use(
      cors({
        origin: '*',
        methods: ['GET', 'POST', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
      })
    )
  }

  private middlewares() {
    this.app.use(morgan('dev'))
    this.app.use(cors())
    this.app.use(express.json())
  }

  async apolloServer() {
    const schema = await buildSchema({
      resolvers,
      emitSchemaFile: path.join(__dirname, 'schema.gql')
    })
    const server = new ApolloServer({
      schema,
      persistedQueries: false,
      cache: 'bounded',
      plugins: [ApolloServerPluginLandingPageGraphQLPlayground]
    })

    await server.start()
    server.applyMiddleware({ app: this.app })

    return this.app
  }

  routes() {
    this.app.get('/', (_req, res) => {
      res.status(200).json({
        name: 'API REST BANCO'
      })
    })
    this.app.use(
      allRoutes.ciudadRouter,
      allRoutes.clienteRouter,
      allRoutes.paisRouter,
      allRoutes.registroRouter,
      allRoutes.tipoCuentaRouter,
      allRoutes.tramiteRouter
    )
  }

  public listen() {
    const server = http.createServer(this.app)
    const io = new ServerSocket(server, {
      cors: {
        origin: '*',
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: ['Content-Type', 'Authorization']
      }
    })

    createSocketServer(io)
    server.listen(this.app.get('port'), () => {
      console.log(
        `Server está corriendo en el puerto http://localhost:${this.app.get(
          'port'
        )}`
      )
    })
  }
}
