import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class FeaturesService{
  private smartphoneFilterData = {
    "Brand" : ["Apple", "Samsung","Redmi", "Vivo", "Oppo", "Honor", "Moto", "Nokia", "Gionee"],
  "RAM" : [
          "6 GB & Above",
          "4 GB",
          "3 GB",
          "2 GB",
          "1 GB"
  ],

  "Battery" : [
              "1000 -1999 mAh",
              "2000 -2999 mAh",
              "3000 -3999 mAh",
              "4000 -4999 mAh",
              "5000 mAh & Above"
  ],
  "Internal Storage" : [
                      "256 GB & Above",
                      "128 GB",
                      "64 GB",
                      "32 GB",
                      "16 GB",
                      "Less than 16 GB"
  ],
  "Screen Size" : [
                "3.0 - 3.4 inch",
                "3.5 - 3.9 inch",
                "4.0 - 4.4 inch",
                "4.5 - 4.9 inch",
                "5.0 - 5.1 inch",
                "5.2 - 5.4 inch",
                "5.5 - 5.6 inch",
                "5.7 - 5.9 inch",
                "6.0 inch & Above"
  ],
  "Operating System" : ["Android", "IOS", "Windows" ],
  "Network Types" : ["2G", "3G", "4G VOLTE", "5G"],
  "SIM Type" : ["Dual Sim", "Single Sim", "Triple Sim"],
  "Primary Camera" : [
                  "Below 2 MP",
                  "2 - 2.9 MP",
                  "3 - 4.9 MP",
                  "5 - 7.9 MP",
                  "8 - 11.9 MP",
                  "12 - 12.9MP",
                  "13 - 15.9 MP",
                  "16 - 20.9 MP",
                  "21 MP and Above"
  ],
  "Secondary Camera" : [
                  "0 - 1.9 MP",
                  "2 - 2.9 MP",
                  "3 - 4.9 MP",
                  "5 - 7.9 MP",
                  "8 - 11.9 MP",
                  "12 - 12.9 MP",
                  "13 - 15.9 MP",
                  "16 - 20.9 MP",
                  "21 MP and Above"
  ],
  "Processor Brand" : [
                    "AMD",
                    "Apple",
                    "ARM",
                    "Exynos",
                    "Huawei",
                    "Intel",
                    "Mediatek",
                    "Snapdragon"
  ],
  "Ideal For" : [
              "Big Storage",
              "High performance",
              "Long-Lasting Battery",
              "Selfie Camera"
  ],
  "Clock Speed" : [
                "1 - 1.5 GHz",
                "1.5 - 1.9 GHz",
                "2 - 2.5 GHz",
                "2.5 GHz & Above"
  ],
  "Cores" : [
            "Dual Core",
            "Hexa Core",
            "Octa Core",
            "Quad Core",
            "Single Core"
  ]
  }

  private smartphoneFilterKeys = ['Brand', 'RAM' ,'Battery', 'Internal Storage', 'Screen Size', 'Operating System',
                                  'Network Types', 'SIM Type', 'Primary Camera', 'Secondary Camera', 'Processor Brand',
                                  'Ideal For', 'Clock Speed', 'Cores'];
  private smartphoneFeatureKeys = ['In The Box', 'Model Number', 'Model Name', 'Color', 'SIM Type', 'Hybrid SIM Slot',
                                  'OTG Compatible', 'Quick Charging', 'SAR Value', 'Display Size', 'Resolution', 'Resolution Type',
                                  'GPU Display', 'Other Display Features', 'Operating System', 'Processor Type', 'Processor Core',
                                  'Primary Clock Speed','Operating Frequency', 'Internal Storage', 'RAM', 'Expandable Storage',
                                  'Supported Memory Card Type', 'Memory Card Slot Type','Primary Camera', 'Primary Camera Features',
                                  'Secondary Camera Available', 'Secondary Camera', 'Secondary Camera Features', 'Network Type',
                                  'Supported Networks', 'Internet Connectivity', 'Charging Port', 'Audio Jack', 'Touchscreen Type',
                                  'SIM Size', 'User Interface', 'Removable Battery', 'Graphics PPI', 'Sensors', 'Other Features',
                                  'GPS Type', 'Audio Formats', 'Video Formats', 'Battery Capacity', 'Width', 'Height', 'Depth',
                                  'Weight','image2','image3','image4'
                                ];

  getSmartphoneFilterData(){
    return {...this.smartphoneFilterData};
  }

  getSmartphoneFilterKeys(){
    return this.smartphoneFilterKeys;
  }

  getSmartphoneFeatureKeys(){
    return this.smartphoneFeatureKeys;
  }
}
