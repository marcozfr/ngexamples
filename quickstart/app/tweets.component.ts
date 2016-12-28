import { Component ,EventEmitter} from '@angular/core';
import { TweetsService } from './tweets.service';

@Component({
    selector: 'tweets',
    templateUrl: 'app/tweets.template.html'
})
export class TweetsComponent {
    tweets : Object[];

    constructor(tweetsService:TweetsService){
        this.tweets = tweetsService.getTweets();
    }
}