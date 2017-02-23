import { Component } from '@angular/core'; 

@Component({
  selector: 'my-app',
  templateUrl : 'app/app.template.html'
})
export class AppComponent  { 
  coursestitle = "Free online courses on the following subjects";
  currentView = 'courses';
  authClick(){
    this.currentView = 'authors';
  }
  courClick(){
    this.currentView = 'courses';
  }
  contactClick(){
    this.currentView = 'contact';
  }
  signupClick(){
    this.currentView = 'signup';
  }
  changePasswordClick(){
    this.currentView = 'change-password';
  }
}
