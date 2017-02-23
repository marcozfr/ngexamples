import {FormControl,FormGroup} from '@angular/forms';

export class PasswordValidators {

    static valuesDiffer(group: FormGroup){
        var newPwd = group.get('newPassword');
        var confirmNewPwd = group.get('confirmNewPassword');
        if(newPwd.value != confirmNewPwd.value){
            return {valuesDiffer : true};
        }
        return null;
    }

}