import { FoodService } from './../foods/food.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../category/category.service';
import { Category } from '../models/category';
import { ImageValidator } from '../validators/image.validator';
import { Router } from '@angular/router';


@Component({
  selector: 'app-food-create',
  templateUrl: './food-create.component.html',
  styleUrls: ['./food-create.component.css'],
  providers: [CategoryService,FoodService]
})
export class FoodCreateComponent implements OnInit {


  categories: Category[];
  constructor(private categoryService: CategoryService,
              private foodService: FoodService,
              private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
      })
  }

  foodForm = new FormGroup({
    title : new FormControl ("",[Validators.required, Validators.minLength(5)]),
    description : new FormControl("", [Validators.required]),
    imageUrl : new FormControl("",[Validators.required, ImageValidator.isValidExtension]),
    categoryId : new FormControl("",[Validators.required])
  })

  get title(){
    return this.foodForm.get("title");
  }

  get imageUrl() {
    return this.foodForm.get("imageUrl");
  }

  clearForm(){
    this.foodForm.patchValue({
      title: '',
      description: '',
      imageUrl: '',
      categoryId: ''
    });
  }

  createFood(){
    
    const food = { 
      id:0,
      title: this.foodForm.value.title,
      description: this.foodForm.value.description,
      imageUrl: this.foodForm.value.imageUrl,
      categoryId: this.foodForm.value.categoryId
    };

    console.log(food);

    this.foodService.createFood(food).subscribe(data=>{
      this.router.navigate(['/foods'])
    });
  }
  
}
