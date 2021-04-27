import { FastifyInstance } from 'fastify'
import UserController from '../modules/users/infra/controllers/UserController'

import bodySchema from '../schemas/body'

export default async function index(fastify: FastifyInstance) {

    const userController = new UserController()

    fastify.post('/', {
        schema: bodySchema
    }, userController.create)

}