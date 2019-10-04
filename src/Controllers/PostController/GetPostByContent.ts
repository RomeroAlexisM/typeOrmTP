import { Request, Response } from "express";;
import { PostRepo } from "../../repositories/PostRepository";

export let getPostByContent = async (req: Request, res: Response) => {
  let postRepo : PostRepo = new PostRepo();
  const postContent = req.params.content;
  let response = null;

  try{
    let post = await postRepo.getPostByContent(postContent);    
     response = post;
  }
  catch(error){
     response = error;
  }

  res.send(response);
};
