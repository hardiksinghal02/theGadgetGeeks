import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../categories/product.service';

@Component({
  selector: 'app-product-smartphone',
  templateUrl: './product-smartphone.component.html',
  styleUrls: ['./product-smartphone.component.css']
})
export class ProductSmartphoneComponent implements OnInit {
  @Input() specs;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {}



}
