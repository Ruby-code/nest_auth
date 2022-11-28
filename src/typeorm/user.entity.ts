import {  Column, Entity, PrimaryGeneratedColumn   } from "typeorm";

@Entity('users')
export class User{
    
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id',
    })
    id: number;

    @Column()
    name: string;

    @Column({
        default: '',})
    username: string;

    @Column({
        name: 'email_address',
        })
    email: string;

    @Column({
        nullable: false
    })
    password: string;
}


