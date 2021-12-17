import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Food } from "../models/food";
import { environment } from "src/environments/environment";

@Injectable()
export class FoodService {

    url=environment.apiUrl;

    constructor(private http: HttpClient) {
        console.log(environment.apiUrl)
    }

    getFoods(categoryId: number): Observable<Food[]>{
        
        let newUrl = this.url;

        if(categoryId){
            newUrl += '?categoryId=' + categoryId;
        }

        return this.http.get<Food[]>(this.url);
    }

    getFoodById(foodId: number): Observable<Food>{
        return this.http.get<Food>(this.url + "/" + foodId);
    }

    createFood(food: Food): Observable<Food>{
        const httpOptions = {
            headers: new HttpHeaders ({
                'Content-Type': 'application/json',
                'Authorization' : 'Token'
            })
        }
       return this.http.post<Food>(this.url,food,httpOptions);
    }

}