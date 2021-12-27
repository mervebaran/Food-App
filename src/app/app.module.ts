import { ErrorInterceptor } from './auth/error.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { FoodsComponent } from './foods/foods.component';
import { FoodComponent } from './foods/food/food.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodFilterPipe } from './pipes/food-filter.pipe';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FoodCreateComponent } from './food-create/food-create.component';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { FoodsHomeComponent } from './foods/foods-home/foods-home.component';

@NgModule({
  declarations: [
    AppComponent,   // componentler eklenir.
    NavbarComponent, 
    CategoryComponent, 
    FoodsComponent,
    FoodComponent, 
    FoodDetailsComponent, 
    FooterComponent, FoodFilterPipe, FoodCreateComponent, AuthComponent, FoodsHomeComponent
  ],
  imports: [
    BrowserModule,   // module eklenir.
    AppRoutingModule,
    FormsModule ,  //ngModel kullanabilmek için eklendi.
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},

  ],   // serviceler eklenir.
  bootstrap: [AppComponent]  // starter component eklenir.
})
export class AppModule { }
