import { FastifyInstance } from 'fastify'
import UserController from '../controllers/UserController'

import bodySchema from '../schemas/body'
import paramsSchema from '../schemas/params'
import querystringSchema from '../schemas/query_string'
import header from '../schemas/header'

export default async function index(fastify: FastifyInstance) {

    const userController = new UserController()

    fastify.post('/', {
        schema: bodySchema
    }, userController.create)

    fastify.get('/:id', {
        schema: paramsSchema
    }, userController.show)

    fastify.get('/search', {
        schema: querystringSchema
    }, userController.show)

    fastify.get('/info', {
        schema: header
    }, userController.show)

}