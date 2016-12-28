import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignUpFormComponent {
    form = new FormGroup({
        username : new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });

    signup(){
        console.log(this.form.value);
    }
}