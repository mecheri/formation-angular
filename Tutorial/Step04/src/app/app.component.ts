import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Step04';

  dates = [new Date().getTime()];
  addDate() {
    // this.dates.push(new Date().getTime()); // Default Change Detection Strategy
    this.dates = this.dates.concat(new Date().getTime()); // OnPush Change Detection Strategy
  }
}
