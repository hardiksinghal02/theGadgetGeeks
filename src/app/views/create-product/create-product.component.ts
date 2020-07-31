import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../categories/product.service';
import { FeaturesService } from '../categories/features.service';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  category:string;
  productId = null;
  constructor(private productService:ProductService, private featureService:FeaturesService) {}
  categoryFilters = {};
  filterKeys = [];
  featureKeys = [];
  title:string;
  titleImage:string;

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    let data = form.value;
    console.log(data);
    this.title = data.title;
    this.titleImage = data['title image'];
    for (var propName in data) {
      if (data[propName] === null || data[propName] === undefined || data[propName] == '') {
        delete data[propName];
      }
    }
    console.log(data);
    this.productService.createProduct(data).subscribe(res => {
      console.log(res);
      this.productId = res.id;
      this.featureKeys = this.featureService.getSmartphoneFeatureKeys();
    });

  }

  addFeatures(form){
    let features = form.value;
    features = {...features,title:this.title, titleImage:this.titleImage};
    this.productService.addFeatures(this.category,this.productId,features).subscribe((res) => {
      console.log('Features added with responseData'+res);
    });
  }

  onCategorySelect(){
    if(this.category === 'smartphone'){
      this.categoryFilters = this.featureService.getSmartphoneFilterData();
      this.filterKeys = this.featureService.getSmartphoneFilterKeys();
    }


  }
}
