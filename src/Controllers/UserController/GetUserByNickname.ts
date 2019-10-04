import { Request, Response } from "express";
import { UserRepo } from "../../repositories/UserRepository";

export let getUserByNickname = async (req: Request, res: Response) => {
  let userRepo : UserRepo = new UserRepo();
  const userNickname = req.params.nickname;
  
  let response = null;

  try{
    let user = await userRepo.getUserByNickname(userNickname);
    response = user;
  }
  catch(error){
    response = error;
  }

  res.send(response);
};