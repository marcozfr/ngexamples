import {Injectable} from '@angular/core';

@Injectable()
export class MessagesService {
    getMessages():string[]{
        return ["Cool feature","Ang2 is cool", "What"];
    }
}