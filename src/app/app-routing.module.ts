import { FoodsHomeComponent } from './foods/foods-home/foods-home.component';

import { AuthComponent } from './auth/auth.component';
import { FoodCreateComponent } from './food-create/food-create.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodsComponent } from './foods/foods.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'foods', pathMatch: 'full' },

  {
    path: 'foods',
    component: FoodsHomeComponent,
    canActivate: [AuthGuard],
    children: [

      { path: '', component: FoodsComponent},
      { path: 'category/:categoryId', component: FoodsComponent},
      { path: 'create', component: FoodCreateComponent},
      { path: ':foodId', component: FoodDetailsComponent},
    ]
  },
  { path: "auth", component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
