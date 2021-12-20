import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Communication-composant';
  fruit: string = '';
  public fruits: string[] = [];

  addfruit() {
    console.log(this.fruit);
    this.fruits.push(this.fruit);
    this.fruit = '';
    console.log(this.fruits);
  }

  suppFruit(fruit: any) {
    this.fruits = this.fruits.filter((f) => f !== fruit);
  }
}
