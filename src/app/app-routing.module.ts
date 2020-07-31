import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { VerifyEmailPageComponent } from './auth/verify-email-page/verify-email-page.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { SmartphoneBrowseComponent } from './views/categories/smartphone-browse/smartphone-browse.component';
import { VerifyEmailPromptComponent } from './auth/verify-email-prompt/verify-email-prompt.component';
import { CreateProductComponent } from './views/create-product/create-product.component';
import { ProductComponent } from './views/product/product.component';


const routes: Routes = [
  {path: '' , component: HomePageComponent},
  {path: 'create' , component: CreateProductComponent},
  {path: 'smartphones' , component: SmartphoneBrowseComponent},
  {path: 'product/:id' , component: ProductComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'signup' , component: SignupComponent},
  {path: 'verifyemail' , component: VerifyEmailPageComponent},
  {path: 'emailverify', component: VerifyEmailPromptComponent},

  {path: '**' , redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
