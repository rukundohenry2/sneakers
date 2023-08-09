import { Component, Input, OnChanges ,SimpleChanges} from '@angular/core';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnChanges {
  @Input() receivedNumber: number | undefined
  faCart = faCartShopping
  showcart : boolean =false
  shoppingcart = 0

  ngOnChanges(changes: SimpleChanges) {
    if (changes['receivedNumber']) {
      this.cartAdd(changes['receivedNumber'].currentValue)
      console.log('Received Number changed:', changes['receivedNumber'].currentValue);
    }
  }

  toogleCart(){
    console.log('the cart works')
    this.showcart = !this.showcart
  }
  cartAdd(itemvalue:number){
    this.shoppingcart = itemvalue
  }
  cartRemove(itemvalue:number){

  }
}