import {Component,Input} from '@angular/core';

@Component({
    selector : 'like',
    template : `
        <span class='glyphicon glyphicon-heart'
                [class.hasLikes]="likeCount > 0"
                [class.noLikes]="likeCount == 0"
                (click)="onClick()"></span> <span>{{likeCount}}</span>
    `,
    styles:[`
        .nolikes {
            color: #ccc;
        }
        .hasLikes {
            color: deeppink;
        }
        .glyphicon-heart:hover {
            cursor: pointer;
        }
    `]
})
export class LikeComponent {

    @Input("likes") likeCount : number;

    onClick(){
        this.likeCount += 1;
    }

}