import {Injectable, Logger} from '@nestjs/common';
import {UserCreationDto} from "../common/requests/userCreation.dto";
import {EventEmitter2, OnEvent} from "@nestjs/event-emitter";
import {UserCreatedEventDto} from "../common/requests/userCreatedEvent.dto";


@Injectable()
export class UsersService {
    constructor(private eventEmitter: EventEmitter2) {}

    async createUser(payload: UserCreationDto, ){
        try {
            // @ts-ignore
            this.eventEmitter.emit('user.created', new UserCreatedEventDto({
                // username: payload.username,
                // email: payload.email,
                // password: payload.password
            }))
            Logger.log("User creation process successful");
            return {
                username:'test',
                email: 'test@gmail.com',
                password: 'pass'
            };
        } catch (error) {
            Logger.log("User creation failed", error);
            return {
                message: error.message
            }
        }
    }
    @OnEvent('user.created')
    async checkIfUserCreated(payload: UserCreatedEventDto){
        Logger.log("The payload used: ", payload)
        return "User was to be created: "
    }
}
