import {Component,Input} from '@angular/core';

@Component({
    selector : 'zippy',
    templateUrl: 'app/zippy.template.html',
    styles: [`
        .toleft :{
            text-align : center;
        }

        .toright :{
            text-align : right;
        }
    `]
})
export class ZippyComponent {
    @Input() 
    title = "No title";
    collapsed = true;

    onClick(){
        this.collapsed = !this.collapsed;
    }
}