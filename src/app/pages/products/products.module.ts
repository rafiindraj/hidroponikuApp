import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    // HttpClientModule,
    ProductsRoutingModule
  ],
  providers:[HttpClientModule]
})
export class ProductsModule { }
