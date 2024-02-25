import {Injectable, Logger} from '@nestjs/common';
import {UserCreationDto} from "../common/requests/userCreation.dto";

@Injectable()
export class UsersService {
    async createUser(payload: UserCreationDto){
        try {
            return "user was created successfully"
        } catch (error) {
            Logger.log("User creation failed", error);
        }
    }
}
