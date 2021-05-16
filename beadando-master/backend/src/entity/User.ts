import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import { Book } from './Book';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    personal_id: string;

    @Column()
    phone: string;

    @Column()
    address: string;

    @Column()
    status: string;

    @Column()
    counter: number;

    @Column()
    allow: boolean;

    @OneToMany(type => Book, book => book.renter)
    books: Book[];

}
