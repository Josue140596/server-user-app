import { Request, Response } from "express"
//Encrypt Password
import bcryptjs from 'bcryptjs';
//Models
import User from "../models/User"

export const getUsers = async( req: Request ,res: Response) =>{
  res.json({
    msg: "get api"
  })
}
export const postUsers = async( req: Request ,res: Response) =>{
  const { nameUser, email, password } = req.body
  const user = new User({ nameUser, email, password });
  //Encript Password
  //How many salts do you want?
  const salt = bcryptjs.genSaltSync(10);
  user.password = bcryptjs.hashSync(password, salt)
  //Save in DB
  await user.save();
  res.json({
    user
  });
}

