import { Post } from "../entities/Post";
import { getManager } from "typeorm";
import { User } from "../entities/User";
import { Category } from "../entities/Category";

export class PostRepo {

    getAllPosts() {
        return getManager().getRepository(Post).find();
    }

    savePost(post: Post) {
        return getManager().getRepository(Post).save(post);
    }

    getPostById(postId: number) {
        return getManager().getRepository(Post).findOne(postId);
    }

    getPostByContent(postContent: string) {   
        return getManager().getRepository(Post).find({content: postContent});
    }

    getPostByUser(user: User) {
        return getManager().getRepository(Post).find({craftedBy: user});
    }

    getPostByUserAndCateogry(user: User, category: Category) {
        return getManager().getRepository(Post).find({craftedBy: user, category: category});
    }

    getPostByCateogry(category: Category) {
        return getManager().getRepository(Post).find({category: category});
    }

}