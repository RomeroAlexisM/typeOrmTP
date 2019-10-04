import { Request, Response } from "express";
import { Post } from "../../entities/Post";
import { PostRepo } from "../../repositories/PostRepository";
import { User } from "../../entities/User";
import { Category } from "../../entities/Category";

export let savePost = async (req: Request, res: Response) => {
  let postRepo : PostRepo = new PostRepo();
  let post : Post = new Post();
  let response = null;
  const { title, content, categoryName, craftedBy} = req.body;
  
  try{
    const user = await User.findOne({id: craftedBy});
    post.title = title;
    post.content = content;
    if (user) {
      post.craftedBy = user;
    }else {
      res.status(404).json({message:'user not found'})
    }

    let category = await Category.findOne({name: categoryName});

    if (category) {
      post.category = category;      
    }else{
      category = new Category()
      category.name = categoryName
      category.save()
      post.category = category
    }

    await postRepo.savePost(post);
    response = 'Post Success';
  }
  catch(error){
    response = error;
  }
  res.send(response);
}
