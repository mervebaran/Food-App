import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../models/food';
import { FoodService } from './food.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css'],
  providers: [FoodService]
})
export class FoodsComponent implements OnInit {

  title= "Menü";
  foods: Food[];
  
  filterText: string = "";


  constructor(private foodService: FoodService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.foodService.getFoods(params["categoryId"]).subscribe(data =>{
        this.foods=data;
      });
    });   
  }

  addToList(food: Food) {
    console.log(food.title);
  }

}
