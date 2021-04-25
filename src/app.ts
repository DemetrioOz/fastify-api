import * as fastify from 'fastify'
import routers from './routes/router'

const app: fastify.FastifyInstance = fastify.fastify({
    logger: {
        level: 'info'
    }
})

app.register(require('fastify-cors'))
app.register(routers)

export default app