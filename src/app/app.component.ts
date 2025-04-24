import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learning-angular-app';
  products = [
    { name: 'Laptop', price: 1200, discount: 100 },
    { name: 'Phone', price: 800, discount: 50 },
    { name: 'Tablet', price: 500, discount: 30 }
  ];
  
}
