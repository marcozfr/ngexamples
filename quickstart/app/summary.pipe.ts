import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value: String, limit : number){
        if(value) return value.substr(0,limit).concat('...');
    }
}