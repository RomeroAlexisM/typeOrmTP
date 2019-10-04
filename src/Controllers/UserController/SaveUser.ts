import { Request, Response } from "express";
import { inspect } from 'util';
import { User } from "../../entities/User";
import { UserRepo } from "../../repositories/UserRepository";

export let saveUser = async (req: Request, res: Response) => {
  let userRepo : UserRepo = new UserRepo();
  let user : User = new User();
  let response = null;

  try{
    const {name, lastName, nickname} = req.body;
    const userData = await userRepo.getUserByNickname(nickname);
    if (userData) {
      res.status(404).json({message:'nickname already exists'})      
    }else {
      user.name = name;
      user.lastName = lastName;
      user.nickname = nickname;
      user.isActive = true;
      await userRepo.saveUser(user);
      response = JSON.stringify('User created success');
    }
  }
  catch(e){
    console.log(inspect(e));
    response = JSON.stringify(inspect(e));
  }
  res.send(response);
}
