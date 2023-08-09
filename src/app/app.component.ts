import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sneakers'
  public receivedNumber: number | undefined

  onNumberSent(number: number) {
    this.receivedNumber = number
  }
}
