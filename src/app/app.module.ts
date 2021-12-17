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
import {HttpClientModule} from '@angular/common/http';
import { FoodCreateComponent } from './food-create/food-create.component';

@NgModule({
  declarations: [
    AppComponent,   // componentler eklenir.
    NavbarComponent, 
    CategoryComponent, 
    FoodsComponent,
    FoodComponent, 
    FoodDetailsComponent, 
    FooterComponent, FoodFilterPipe, FoodCreateComponent
  ],
  imports: [
    BrowserModule,   // module eklenir.
    AppRoutingModule,
    FormsModule ,  //ngModel kullanabilmek için eklendi.
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],   // serviceler eklenir.
  bootstrap: [AppComponent]  // starter component eklenir.
})
export class AppModule { }
