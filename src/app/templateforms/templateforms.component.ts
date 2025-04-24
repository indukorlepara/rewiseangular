import { Component } from '@angular/core';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrls: ['./templateforms.component.css']
})
export class TemplateformsComponent {

  user={name:"",email:'',password:''};
  submitted = false;
  onSubmit(form: any) {
    this.submitted = true;
    console.log(this.user);
  }

}
