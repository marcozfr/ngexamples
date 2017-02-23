import {FormControl} from '@angular/forms';

export class UsernameValidators {

    static shouldBeUnique(control : FormControl){
        return new Promise((resolve, reject) => {
            setTimeout(function(){
                if(control.value == "mosh")
                    resolve({ shouldBeUnique : true })
                else 
                    resolve({ shouldBeUnique : false });
            }, 1000);
        });
    }

    static cannotContainSpaces(control : FormControl){
        if(control.value.indexOf(' ') >= 0)
            return  { cannotContainSpaces : true};
        return { cannotContainSpaces : false};
    }
}