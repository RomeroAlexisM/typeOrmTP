import * as express from 'express';
import * as bodyParser from "body-parser";
import "reflect-metadata";
import {createConnection} from "typeorm";
import * as appConfig from "./app.config";

import {userController} from "./Controllers";
import {postController} from "./Controllers";
import {categoryController} from "./Controllers";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("port", process.env.PORT || 3000);


app.listen(app.get("port"), () => {
  console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
  console.log("  Press CTRL-C to stop\n");
});


app.get("/users", userController.getAllUsers);
app.get("/user/:nickname", userController.getUserByNickname);
app.post("/user", userController.saveUser);

app.get("/posts", postController.getAllPosts);
app.get("/post/:postId", postController.getPostById);
app.get("/post/content/:content", postController.getPostByContent); 
app.get("/posts/user/:userId", postController.getPostByUser); 
app.get("/posts/category/:categoryName", postController.getPostByCategory); 
app.get("/posts/user/:userId/category/:categoryName", postController.getPostByUserAndCategory); 
app.post("/post", postController.savePost);

app.get("/categories", categoryController.getAllCategories);
app.post("/category", categoryController.saveCategory);


createConnection(appConfig.dbOptions).then(async connection => {
  console.log("Connected to DB");

}).catch(error => console.log("TypeORM connection error: ", error));

module.exports = app;