import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  isMobile: boolean = false;
  type = 'sayuran'
  page = 1
  perpage =  10
  constructor(private productsService : ProductService) { 
  
  }


  ngOnInit(): void {
    this.getProduct()
  }

  getProduct() {
    this.productsService.getProductbyPage(this.type, this.page, this.perpage)
      .subscribe((response) => {
        console.log(response)
      },(error) => {
        // this.toastrService.error('Failed')
        console.log(error);
      });
  }



}
