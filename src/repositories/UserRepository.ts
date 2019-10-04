import { User } from "../entities/User";
import { getManager } from "typeorm";

export class UserRepo {

    getAllUsers() {
        return getManager().getRepository(User).find();
    }

    saveUser(user: User) {
        return getManager().getRepository(User).save(user);
    }

    getUserById(userId: number) {
        return getManager().getRepository(User).findOne(userId);
    }

    getUserByNickname(userNickname: string) {        
        return getManager().getRepository(User).findOne({nickname: userNickname});

    }
}