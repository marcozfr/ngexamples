import {Component} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {UsernameValidators} from './usernameValidators';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignUpFormComponent {
//    form = new FormGroup({
//        username : new FormControl('', Validators.required),
//        password: new FormControl('', Validators.required)
//    });

    form : FormGroup;

    constructor(fb : FormBuilder){
        this.form  = fb.group({
            username : ['', 
                Validators.compose([Validators.required, UsernameValidators.cannotContainSpaces]), 
                UsernameValidators.shouldBeUnique], 
            password : ['', Validators.required]
        });
    }

    signup(){
        // var result = authService.login(this.form.value);
        this.form.get('username').setErrors({
            invalidLogin: true
        });
        console.log(this.form.value);
    }
}