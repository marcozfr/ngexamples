import {Component} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {PasswordValidators} from './passwordValidators';

@Component({
    selector: 'change-password',
    templateUrl: 'app/change-password.component.html'
})
export class ChangePasswordFormComponent {

    form : FormGroup;

    constructor(fb : FormBuilder){
        this.form  = fb.group({
            oldPassword : ['', Validators.required], 
            newPassword : ['', Validators.required], 
            confirmNewPassword : ['', Validators.required]
        },{validator: PasswordValidators.valuesDiffer});
    }

    changePassword(){
        console.log(this.form.value);
    }
}