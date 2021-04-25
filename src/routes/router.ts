import { FastifyInstance } from 'fastify'

import userRouter from './user.routes'

export default async function router(fastify: FastifyInstance) {
    fastify.register(userRouter, { prefix: '/users' })
}