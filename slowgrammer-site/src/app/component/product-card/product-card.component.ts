import { Product } from './../../models/product';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  image = 'assets/images/twinshirt.jpg';
  @Input() product: Product;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  loadProduct(product) {
    console.log(product.name);
    this.router.navigate(['product']);
  }
}
