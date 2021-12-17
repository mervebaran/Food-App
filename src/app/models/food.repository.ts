import { Food } from "./food";

export default class FoodRepository {
    private foods: Food[];


    constructor() {
        this.foods = [
            { id: 1, title: "Food 1", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, adipisci a beatae eum sequi, vitae numquam odit reprehenderit unde reiciendis libero odio quod voluptates neque sunt earum labore illo optio?", imageUrl: "1.jpg" },
            { id: 2, title: "Food 2", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, adipisci a beatae eum sequi, vitae numquam odit reprehenderit unde reiciendis libero odio quod voluptates neque sunt earum labore illo optio?", imageUrl: "2.jpg" },
            { id: 3, title: "Food 3", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, adipisci a beatae eum sequi, vitae numquam odit reprehenderit unde reiciendis libero odio quod voluptates neque sunt earum labore illo optio?", imageUrl: "3.jpg" },
            { id: 4, title: "Food 4", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, adipisci a beatae eum sequi, vitae numquam odit reprehenderit unde reiciendis libero odio quod voluptates neque sunt earum labore illo optio?", imageUrl: "4.jpg" },
            { id: 5, title: "Food 5", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, adipisci a beatae eum sequi, vitae numquam odit reprehenderit unde reiciendis libero odio quod voluptates neque sunt earum labore illo optio?", imageUrl: "5.jpg" },
            { id: 6, title: "Food 6", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, adipisci a beatae eum sequi, vitae numquam odit reprehenderit unde reiciendis libero odio quod voluptates neque sunt earum labore illo optio?", imageUrl: "6.jpg" },
            { id: 7, title: "Food 7", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, adipisci a beatae eum sequi, vitae numquam odit reprehenderit unde reiciendis libero odio quod voluptates neque sunt earum labore illo optio?", imageUrl: "7.jpg" },
            { id: 8, title: "Food 8", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, adipisci a beatae eum sequi, vitae numquam odit reprehenderit unde reiciendis libero odio quod voluptates neque sunt earum labore illo optio?", imageUrl: "8.jpg" },
            { id: 9, title: "Food 9", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, adipisci a beatae eum sequi, vitae numquam odit reprehenderit unde reiciendis libero odio quod voluptates neque sunt earum labore illo optio?", imageUrl: "9.jpg" }
        ];
    }

    getFoods(): Food[] {
        return this.foods;
    }

    getFoodById(id: number): Food {
        return this.foods.find(i=>i.id==id);
    }
}