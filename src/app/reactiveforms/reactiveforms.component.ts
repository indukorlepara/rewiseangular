import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { max, min } from 'rxjs';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})

export class ReactiveformsComponent implements OnInit {

  
  form!: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
     this.form=this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email,passwordLengthValidator(8, 16)]],
      password: ['', Validators.required],
    });
  }

  onSubmit(form:any){
    this.submitted = true;
    if (this.form.valid) {
    console.log(this.form.value);
    }

  }

}
function passwordLengthValidator(arg0: number, arg1: number):ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const value = control.value || '';
      if (value.length < min || value.length > max) {
        return {
          passwordLength: {
            requiredMin: min,
            requiredMax: max,
            actualLength: value.length,
          }
        };
      }
      return null;
    };
    
}

