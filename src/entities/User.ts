import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from "typeorm";
import {Post} from "./Post";

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nickname: string;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column()
    isActive: boolean;

    @OneToMany(type => Post, post => post.craftedBy)
    posts: Post[];

}
