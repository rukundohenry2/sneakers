import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product : any=[
    {
      "name":"Fall limited Edition sneakers",
      "Description":"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      "price":250.00,
      "discount" : 50,
      "imageUrl" : ["assets/images/image-product-1.jpg","assets/images/image-product-2.jpg","assets/images/image-product-3.jpg","assets/images/image-product-4.jpg"]
    }
  ]
  @Output() numberToSend: EventEmitter<number> = new EventEmitter<number>();
  
  selectedImage:string = ''
  productcounter = 0
  faCart= faCartShopping
  imageselector:number = 1

  ngOnInit(): void {
      this.selectedImage = this.product[0].imageUrl[0]
  }
  selectImage(imageurl:string):void{
    this.selectedImage = imageurl
  }
  onDiscount(price:any,discount:any):number{
    return price*(discount/100)
  }
  onadd(counter:any){
    this.productcounter += 1
  }
  onsubtract(counter:number){
    if (counter>0){
      this.productcounter -= 1
    }
  }
  sendNumber(value:number) {
    this.numberToSend.emit(value);
  }
}
