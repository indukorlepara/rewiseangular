import { Component } from '@angular/core';

@Component({
  selector: 'app-createpipe',
  templateUrl: './createpipe.component.html',
  styleUrls: ['./createpipe.component.css']
})
export class CreatepipeComponent {
  today: Date = new Date();
}
