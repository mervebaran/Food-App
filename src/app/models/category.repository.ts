import { Category } from "./category";

export class CategoryRepository {
    private categories : Category[];


    constructor() {
        this.categories= [
            {id:1, name:"Et Çeşitleri"},
            {id:2, name:"Kahvaltı"},
            {id:3, name:"Pide Çeşitleri"},
            {id:4, name:"Meze Çeşitler"},
            {id:5, name:"Salata Çeşitleri"},
            {id:6, name:"Tatlılar"},
            {id:7, name:"İçecekler"},
            {id:8, name:"Çorbalar"}
        ];
    }

    getCategories(): Category[] {
        return this.categories;
    }
}