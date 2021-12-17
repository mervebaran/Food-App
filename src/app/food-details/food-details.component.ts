import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../foods/food.service';
import { Food } from '../models/food';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css'],
  providers: [FoodService]
})
export class FoodDetailsComponent implements OnInit {


  food: Food;

  constructor(private foodService: FoodService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.foodService.getFoodById(params["foodId"]).subscribe(data => {
        this.food = data;
      })
    })
  }

}
