import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../categories/product.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productId:string;
  productType:string
  constructor(private route: ActivatedRoute,private productService: ProductService) { }
  productData;
  images = [];
  highlightedImage;

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    this.productType = this.route.snapshot.queryParams['type'];
    this.productService.getProductById(this.productId,this.productType).then((data) => {
      this.productData = data;
        this.images = [this.productData.titleImage,this.productData.image2,this.productData.image3,this.productData.image4];
        this.highlightedImage = this.images[0];
    });
    // this.productService.productData.subscribe((data) => {
    //   this.productData = data;
    // });


  }

}
