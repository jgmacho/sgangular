import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from './../../models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('thing', this.route.snapshot.params.name);
    // this.product.name = this.route.snapshot.params.name;
    this.route.paramMap.subscribe(params => {
      // console.log(params.get('product'));
      this.product.name = params.get('name');
    });
  }

}
