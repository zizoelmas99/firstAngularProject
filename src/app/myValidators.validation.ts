import { AbstractControl, ValidationErrors } from '@angular/forms';



export class TextValidator{

    static noSpacesAllowed(control : AbstractControl) : ValidationErrors | null 
    {
        // != -1 : Means it contain spaces
        if((control.value as string).indexOf(' ') != -1)
            return {noSpacesAllowed : true};
        else
            return null;
    }

    static asyncUniquness(control : AbstractControl) : Promise<ValidationErrors> | null
    {
        return new Promise((resolve,reject) => {
            // Simulation to time = execute to the process
            setTimeout(() =>{
                control.value === "zizo99@gmail.com" ? resolve({asyncUniquness : true}) : resolve(null);
            },5000);
        })
    }

}
