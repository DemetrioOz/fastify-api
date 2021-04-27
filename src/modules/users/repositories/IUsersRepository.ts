import IRegisterUser from "../dtos/IRegisterUser";
import User from "../infra/typeorm/entities/User";

export default interface IUsersRepository {
    save(data: IRegisterUser): Promise<User>
    findById(id: string): Promise<User | undefined>
    findByEmail(email: string): Promise<User | undefined>
}