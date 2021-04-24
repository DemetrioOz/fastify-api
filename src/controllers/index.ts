import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'

export default async function index(fastify: FastifyInstance) {

    fastify.get('/', async (req: FastifyRequest, rep: FastifyReply) => {
        rep.send({ message: 'veio mermo' })
    })

}