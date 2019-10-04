import { getAllPosts } from "./PostController/GetAllPost";
import { getPostByCategory } from "./PostController/getPostByCategory";
import { getPostByUserAndCategory } from "./PostController/GetPostByUserAndCategory";
import { getPostByContent } from "./PostController/GetPostByContent";
import { getPostById } from "./PostController/GetPostById";
import { getPostByUser } from "./PostController/GetPostByUser";
import { savePost } from "./PostController/SavePost";

import { getAllUsers } from "./UserController/GetAllUsers";
import { getUserByNickname } from "./UserController/GetUserByNickname";
import { saveUser } from "./UserController/SaveUser";

import { getAllCategories } from "./CategoryController/GetAllCategories";
import { saveCategory } from "./CategoryController/SaveCategory";




export const postController = {
  getAllPosts,
  getPostByCategory,
  getPostByUserAndCategory,
  getPostByContent,
  getPostById,
  getPostByUser,
  savePost
}

export const userController = {
  getAllUsers,
  getUserByNickname,
  saveUser
}

export const categoryController = {
  getAllCategories,
  saveCategory
}