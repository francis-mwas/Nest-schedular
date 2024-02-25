import {Body, Controller, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {UserCreationDto} from "../common/requests/userCreation.dto";

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Post("create")
    createUser(payload: UserCreationDto){
        return this.userService.createUser(payload);
    }
    @Post('checkuser')
    checkUser(@Body() payload: UserCreationDto){
        return this.userService.checkIfUserCreated(payload);
    }
}
