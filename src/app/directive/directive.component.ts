import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

   isLoggedIn=true;
   users=["test","test1","test2"];
   status=1;
   isImportant=true;
}
