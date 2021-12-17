import { Pipe, PipeTransform } from '@angular/core';
import { Food } from '../models/food';

@Pipe({
  name: 'foodFilter'
})
export class FoodFilterPipe implements PipeTransform {

  transform(foods: Food[], filterText: string): Food []{
    filterText = filterText.toLowerCase();


    console.log(filterText);
    console.log(foods);

    return filterText? foods.filter((f: Food)=>
    f.title.toLowerCase().indexOf(filterText) !== -1 || f.description.toLowerCase().indexOf(filterText) !== -1) : foods;
  }

}
