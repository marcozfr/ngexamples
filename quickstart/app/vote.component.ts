import {Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector : 'vote',
    template: `
        <span class="vert">
            <i class="glyphicon glyphicon-menu-up" (click) = "onUpVote()"
                [class.highlighted] = 'myVote == 1' ></i>
            <span>{{voteCount}}</span>
            <i class="glyphicon glyphicon-menu-down" (click) = "onDownVote()" 
                [class.highlighted] = 'myVote == -1'></i>
        </span>
    `,
    styles:[`
        .vert > i,span {
            text-align : center;
            width:20px;
        } 
        .highlighted {
            color : orange;
        }
    `],
    inputs : [ 'voteCount:votes', 'myVote'],
    outputs : ['vote']
})
export class VoteComponent {
    voteCount : number;
    myVote : number;
    vote = new EventEmitter();

    onUpVote(){
        if(this.myVote == 0 || this.myVote == -1){
            this.voteCount += (this.myVote = 1);
            this.vote.emit({myVote :this.myVote, voteCount : this.voteCount});
        }
    }
    onDownVote(){
        if(this.myVote == 0 || this.myVote == 1){
            this.voteCount += (this.myVote = -1);
            this.vote.emit({myVote :this.myVote, voteCount : this.voteCount});
        }
        
    }
}