import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-smartphone-browse',
  templateUrl: './smartphone-browse.component.html',
  styleUrls: ['./smartphone-browse.component.css']
})
export class SmartphoneBrowseComponent implements OnInit {
  constructor(private productService:ProductService) { }
  loading=true;
  products = [];
  brands = ['Apple', 'Samsung','Redmi', 'Vivo', 'Oppo', 'Honor', 'Moto', 'Nokia', 'Gionee'];
  RAM = [
          '6 GB & Above',
          '4 GB',
          '3 GB',
          '2 GB',
          '1 GB',
  ];

  Battery = [
              '1000 -1999 mAh',
              '2000 -2999 mAh',
              '3000 -3999 mAh',
              '4000 -4999 mAh',
              '5000 mAh & Above',
  ];
  internalStorage = [
                      '256 GB & Above',
                      '128 GB',
                      '64 GB',
                      '32 GB',
                      '16 GB',
                      'Less than 16 GB'
  ];
  ScreenSize = [
                '3.0 - 3.4 inch',
                '3.5 - 3.9 inch',
                '4.0 - 4.4 inch',
                '4.5 - 4.9 inch',
                '5.0 - 5.1 inch',
                '5.2 - 5.4 inch',
                '5.5 - 5.6 inch',
                '5.7 - 5.9 inch',
                '6.0 inch & Above'
  ];
  OS = ['Android', 'IOS', 'Windows' ];
  networkTypes = ['2G', '3G', '4G VOLTE', '5G'];
  simType = ['Dual Sim', 'Single Sim', 'Triple Sim'];
  primaryCamera = [
                  'Below 2 MP',
                  '2 - 2.9 MP',
                  '3 - 4.9 MP',
                  '5 - 7.9 MP',
                  '8 - 11.9 MP',
                  '12 - 12.9MP',
                  '13 - 15.9 MP',
                  '16 - 20.9 MP',
                  '21 MP and Above'
  ];
  secondaryCamera = [
                  '0 - 1.9 MP',
                  '2 - 2.9 MP',
                  '3 - 4.9 MP',
                  '5 - 7.9 MP',
                  '8 - 11.9 MP',
                  '12 - 12.9 MP',
                  '13 - 15.9 MP',
                  '16 - 20.9 MP',
                  '21 MP and Above'
  ];
  processorBrand = [
                    'AMD',
                    'Apple',
                    'ARM',
                    'Exynos',
                    'Huawei',
                    'Intel',
                    'Mediatek',
                    'Snapdragon'
  ];
  idealFor = [
              'Big Storage',
              'High performance',
              'Long-Lasting Battery',
              'Selfie Camera'
  ];
  clockSpeed = [
                '1 - 1.5 GHz',
                '1.5 - 1.9 GHz',
                '2 - 2.5 GHz',
                '2.5 GHz & Above'
  ];
  cores = [
            'Dual Core',
            'Hexa Core',
            'Octa Core',
            'Quad Core',
            'Single Core'
  ];

  ngOnInit(): void {
    this.fetchProducts();
  }
  filters = {
    brands:[],
    RAM:[],
    Battery:[],
    internalStorage:[],
    ScreenSize:[],
    OS:[],
    networkType:[],
    simType:[],
    primaryCamera:[],
    secondaryCamera:[],
    processorBrand:[],
    idealFor:[],
    clockSpeed:[],
    cores:[]

  };
  onFilterChange(filterCategory:string[], value, event){
      if(event.checked){
        filterCategory.push(value);
      }else{
        for(var i = filterCategory.length - 1; i >= 0; i--) {
          if(filterCategory[i] === value) {
              filterCategory.splice(i, 1);
          }
      }
      }
      this.fetchProducts();
  }

  fetchProducts(){
    this.loading = true;
    let modifiedFilters = {};
    for(var key in this.filters){
      if(this.filters[key].length != 0){
        modifiedFilters = {...modifiedFilters, [key]: this.filters[key]};
      }
    }
    this.productService.getProductsByFeatures('smartphone',modifiedFilters).subscribe((result) => {
      console.log(result);
      this.products = result;
      this.loading = false;
    });
  }
}
