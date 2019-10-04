import { Request, Response } from "express";
import { Category } from "../../entities/Category";
import { CategoryRepo } from "../../repositories/CategoryRepository";

export let getAllCategories = async (req: Request, res: Response) => {
  let postRepo : CategoryRepo = new CategoryRepo();
  let response = null;
  try{
    let posts = await postRepo.getAllCategories();
    response = posts;
  }
  catch(error){
    response = error;
  }

  res.send(response);
};