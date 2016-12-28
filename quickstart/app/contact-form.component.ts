import {Component} from '@angular/core';
import {CourseService} from './course.service';

@Component({
    selector:'contact-form',
    templateUrl:'app/contact-form.component.html'
})

export class ContactFormComponent{
    courses : Object[];
    constructor(courseService:CourseService){
       this.courses = courseService.getCourses();
    }
    onchange(k:Object){
        console.log(k);
    }

    onSubmit(form:Object){
        console.log(form);
    }
}