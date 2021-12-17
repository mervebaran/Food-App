import { FoodCreateComponent } from './food-create/food-create.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodsComponent } from './foods/foods.component';

const routes: Routes = [
  {path:'foods', component:FoodsComponent},
  {path:'', redirectTo:'foods',pathMatch: 'full'},
  {path:'foods/category/:categoryId', component:FoodsComponent},
  {path:'foods/create', component: FoodCreateComponent},
  {path:'foods/:foodId', component: FoodDetailsComponent}
  
];

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})

export class AppRoutingModule { }
