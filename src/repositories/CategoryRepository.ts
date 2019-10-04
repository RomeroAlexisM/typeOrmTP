import { Category } from "../entities/Category";
import { getManager } from "typeorm";

export class CategoryRepo {

    getAllCategories() {
        return getManager().getRepository(Category).find();
    }

    saveCategory(category: Category) {
        return getManager().getRepository(Category).save(category);
    }

    getCategoryById(categoryId: number) {
        return getManager().getRepository(Category).findOne(categoryId);
    }

}