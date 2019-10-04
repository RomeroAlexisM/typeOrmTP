import { Request, Response } from "express";
import { UserRepo } from "../../repositories/UserRepository";

export let getAllUsers = async (req: Request, res: Response) => {
  let userRepo : UserRepo = new UserRepo();
  let response = null;

  try{
    let users = await userRepo.getAllUsers();
    response = users;
  }
  catch(error){
    response = error;
  }

  res.send(response);
};