import { Request, Response } from "express";
import { PostRepo } from "../../repositories/PostRepository";
import { User } from "../../entities/User";

export let getPostByUser = async (req: Request, res: Response) => {
  let postRepo : PostRepo = new PostRepo();
  const userId = req.params.userId;
  let response = null;

  try{
    let user = await User.findOne(userId);
    let post = await postRepo.getPostByUser(user);    
     response = post;
  }
  catch(error){
     response = error;
  }

  res.send(response);
};