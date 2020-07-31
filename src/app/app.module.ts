import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { matrialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { VerifyEmailPageComponent } from './auth/verify-email-page/verify-email-page.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './views/home-page/home-page.component';
import { SmartphoneBrowseComponent } from './views/categories/smartphone-browse/smartphone-browse.component';
import { VerifyEmailPromptComponent } from './auth/verify-email-prompt/verify-email-prompt.component';
import { CreateProductComponent } from './views/create-product/create-product.component';
import { ProductComponent } from './views/product/product.component';
import { ProductSmartphoneComponent } from './views/product/product-smartphone/product-smartphone.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    VerifyEmailPageComponent,
    HomePageComponent,
    SmartphoneBrowseComponent,
    VerifyEmailPromptComponent,
    CreateProductComponent,
    ProductComponent,
    ProductSmartphoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    matrialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
