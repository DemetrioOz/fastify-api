import IRegisterUser from "@modules/users/dtos/IRegisterUser";
import CreateUserService from "@modules/users/services/CreateUserService";
import { FastifyReply, FastifyRequest } from "fastify";
import { container } from "tsyringe";

export default class UserController {

    async create(req: FastifyRequest, rep: FastifyReply): Promise<FastifyReply> {
        const data: IRegisterUser = req.body as IRegisterUser
        const createUserService = container.resolve(CreateUserService)
        const user = await createUserService.execute(data)
        return rep.send(user)
    }

}