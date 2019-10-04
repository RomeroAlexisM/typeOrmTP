import "reflect-metadata";
import {ConnectionOptions} from "typeorm";
import {User} from './entities/User'
import {Post} from './entities/Post'
import {Category} from './entities/Category'

 export let dbOptions: ConnectionOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "****",
    database: "testTypeOrm",
    entities: [User, Post, Category],
    synchronize: true,
}