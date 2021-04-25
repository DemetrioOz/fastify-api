import { FastifyRequest, FastifyReply } from 'fastify'

export default class UserController {

    async create(req: FastifyRequest, rep: FastifyReply) {
        rep.send({ message: 'bombou todas' })
    }

    async show(req: FastifyRequest, rep: FastifyReply) {
        rep.send({ message: 'veio pelo get' })
    }

    async search(req: FastifyRequest, rep: FastifyReply) {
        if (req.validationError) {
            console.log('-> ' + req.validationError)
            rep.code(400).send({
                type: 'error',
                error: req.validationError
            })
        } else {
            rep.send({ message: 'Deu certo sem erros!' })
        }
    }

    async info(req: FastifyRequest, rep: FastifyReply) {
        rep.send({ message: 'veio pelo get' })
    }

}