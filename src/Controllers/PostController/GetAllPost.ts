import { Request, Response } from "express";
import { PostRepo } from "../../repositories/PostRepository";

export let getAllPosts = async (req: Request, res: Response) => {
  let postRepo : PostRepo = new PostRepo();
  let response = null;
  try{
    let posts = await postRepo.getAllPosts();
    console.log(posts);
    
     response = posts;
  }
  catch(error){
     response = error;
  }

  res.send(response);
};