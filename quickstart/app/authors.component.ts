import {Component,EventEmitter} from '@angular/core';
import {AuthorsService} from './authors.service';

@Component({
    selector: 'authors',
    templateUrl:'app/authors.template.html'
})
export class AuthorsComponent{
    iamgeUrl = '';
    title : 'Best authors on the web';
    authors : Object[];
    constructor(authorsService: AuthorsService){
        this.authors = authorsService.getAuthors();
    }

    onChangeFavorite($event : EventEmitter<String>){
        console.log($event);
    }

}