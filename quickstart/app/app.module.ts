import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppComponent }  from './app.component';
import { CoursesComponent }  from './courses.component';
import { AuthorsComponent }  from './authors.component';
import { AutoGrowDirective }  from './auto-grow.directive';
import { AuthorsService } from './authors.service';
import { CourseService } from './course.service';
import { StarringComponent } from './starring.component';
import { LikeComponent } from './like.component';
import { VoteComponent } from './vote.component';
import { TweetsService} from './tweets.service';
import { TweetsComponent} from './tweets.component';
import { SummaryPipe} from './summary.pipe';
import { ZippyComponent} from './zippy.component';
import { ContactFormComponent} from './contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpFormComponent } from './signup-form.component'
import { ChangePasswordFormComponent } from './change-password.component'

@NgModule({
  imports:      [ BrowserModule,FormsModule, ReactiveFormsModule],
  declarations: [ AppComponent, CoursesComponent,AuthorsComponent,
    AutoGrowDirective,StarringComponent,LikeComponent,
    VoteComponent,TweetsComponent,SummaryPipe,ZippyComponent,
    ContactFormComponent,SignUpFormComponent,ChangePasswordFormComponent],
  bootstrap:    [ AppComponent ],
  providers : [AuthorsService,CourseService,TweetsService]
})
export class AppModule { }
