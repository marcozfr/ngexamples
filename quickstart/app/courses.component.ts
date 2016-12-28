import { Component ,EventEmitter} from '@angular/core';
import { CourseService } from './course.service';

@Component({
    selector: 'courses',
    templateUrl: 'app/courses.template.html'
})
export class CoursesComponent {
    loggedIn = false;
    isActive = true;
    courses : Object[];

    constructor(courseService:CourseService){
        this.courses = courseService.getCourses();
    }

    onClick(){
        console.log('change on button');
    }

    onVote($event : EventEmitter<String>){
        console.log($event);
    }

}