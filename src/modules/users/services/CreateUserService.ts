import { inject, injectable } from "tsyringe";
import IRegisterUser from "../dtos/IRegisterUser";
import User from "../infra/typeorm/entities/User";
import IUsersRepository from "../repositories/IUsersRepository";

@injectable()
export default class CreateUserService {

    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository
    ) { }

    async execute(data: IRegisterUser): Promise<User> {
        const userExists = await this.usersRepository.findByEmail(data.email)

        if (userExists) {
            throw new Error('Email is not available')
        }

        const user = await this.usersRepository.save(data)

        return user
    }

}