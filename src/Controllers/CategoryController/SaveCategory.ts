import { Request, Response } from "express";
import { Category } from "../../entities/Category";
import { CategoryRepo } from "../../repositories/CategoryRepository";

export let saveCategory = async (req: Request, res: Response) => {
  let categoryRepo : CategoryRepo = new CategoryRepo();
  let category : Category = new Category();
  let response = null;

  try{
    const {name} = req.body
    const categoryData = await Category.findOne({name: name});
    if (categoryData) {
      res.status(404).json({message:'category already exists'})
    } else {
      category.name = name;
      await categoryRepo.saveCategory(category);
      response = 'success';
    }
  }
  catch(error){
    response = error;
  }
  res.send(response);
}
