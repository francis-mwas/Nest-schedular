import { Controller } from '@nestjs/common';
import {UsersService} from "./users.service";
import {UserCreationDto} from "../common/requests/userCreation.dto";

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    createUser(payload: UserCreationDto){
        return this.userService.createUser(payload);
    }
}
