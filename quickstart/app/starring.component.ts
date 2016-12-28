import {Component,Input,EventEmitter,Output} from '@angular/core';

@Component({
    selector: 'star',
    template: `
            <i class='glyphicon' 
                [ngClass] = "{
                    'glyphicon-star': starred,
                    'glyphicon-star-empty': !starred
                }"
                [ngStyle] = "{
                    color: starred ? 'orange' : 'grey' 
                }"
                (click)="onClick()"></i>  
    `/*,
   styles: [`
        .glyphicon-star {
            color: orange;
        }
    `]
    */
   // inputs: ['starred:isFavorite'],
  // outputs: ['change:changeFavorite']
})
export class StarringComponent {
    @Input("isFavorite") starred:boolean;
    @Output("changeFavorite") change = new EventEmitter();

    onClick(){
        this.starred = !this.starred;
        this.change.emit({newValue: this.starred });
    }
}