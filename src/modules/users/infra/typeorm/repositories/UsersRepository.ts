import IRegisterUser from "@modules/users/dtos/IRegisterUser";
import IUsersRepository from "@modules/users/repositories/IUsersRepository";
import { getRepository, Repository } from "typeorm";
import User from "../entities/User";

export default class UsersRepository implements IUsersRepository {
    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User)
    }

    async save(data: IRegisterUser): Promise<User> {
        const user = this.repository.create(data)

        await this.repository.save(user)

        return user
    }

    async findByEmail(email: string): Promise<User | undefined> {
        return this.repository.findOne({ where: { email } })
    }

    async findById(id: string): Promise<User | undefined> {
        return this.repository.findOne(id)
    }


}