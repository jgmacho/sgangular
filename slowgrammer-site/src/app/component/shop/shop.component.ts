import { Router } from '@angular/router';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: Product[] = [];
  constructor(private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    const product1 = new Product(1, 'First Product', 'this product is the first in the shop', 2, 2.50);
    const product2 = new Product(2, 'Second Product', 'this product is the second in the shop', 4, 200.00);
    const product3 = new Product(1, 'Three Product', 'this product is the third in the shop', 8, 40.00);

    this.products.push(product1);
    this.products.push(product2);
    this.products.push(product3);
    // this.products[0] = product1;
    // this.products[1] = product2;
    // this.products[2] = product3;

  }

  loadProduct(product) {
    this.router.navigate(['product', {product: product}]);
  }
}
