import { Request, Response } from "express";
import { PostRepo } from "../../repositories/PostRepository";
import { User } from "../../entities/User";
import { Category } from "../../entities/Category";

export let getPostByUserAndCategory = async (req: Request, res: Response) => {
  let postRepo : PostRepo = new PostRepo();
  const userId = req.params.userId;
  const categoryName = req.params.categoryName;
  let response = null;

  try{
    let user = await User.findOne(userId);
    let category = await Category.findOne({name: categoryName});

    let post = await postRepo.getPostByUserAndCateogry(user, category);    
     response = post;
  }
  catch(error){
     response = error;
  }

  res.send(response);
};
