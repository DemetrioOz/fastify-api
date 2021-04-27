import 'reflect-metadata'

import fastify, { FastifyInstance } from 'fastify'
import routers from './routes/router'
import '@shared/infra/typeorm'
import '@shared/container'

const app: FastifyInstance = fastify({
    logger: {
        level: 'info'
    }
})

app.register(require('fastify-cors'))
app.register(routers)

export default app