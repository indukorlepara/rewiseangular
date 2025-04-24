import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  childData: string = 'Initial data';
  title:string="Parent Component";
  imageUrl :string="https:\\logo";
  username = ''; //

  changeData(){
   // this.childData="updated data";
    setTimeout(() => {
      this.childData = 'Updated data';
    }, 3000);


  }

}
