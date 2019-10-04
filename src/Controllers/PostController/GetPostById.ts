import { Request, Response } from "express";
import { PostRepo } from "../../repositories/PostRepository";

export let getPostById = async (req: Request, res: Response) => {
  let postRepo : PostRepo = new PostRepo();
  const postId = parseInt(req.params.postId);
  let response = null;
  try{
    let post = await postRepo.getPostById(postId);    
     response = post;
  }
  catch(error){
     response = error;
  }

  res.send(response);
};