import { Request, Response } from "express";
import { PostRepo } from "../../repositories/PostRepository";
import { Category } from "../../entities/Category";

export let getPostByCategory = async (req: Request, res: Response) => {
  let postRepo : PostRepo = new PostRepo();
  const categoryName = req.params.categoryName;
  let response = null;
  try{

    let category = await Category.findOne({name: categoryName});

    let post = await postRepo.getPostByCateogry(category);    
     response = post;
  }
  catch(error){
     response = error;
  }

  res.send(response);
};