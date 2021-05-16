import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './Category';
import { User } from './User';

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, type: 'text' })
    type: string;

    @Column({ nullable: true, type: 'text' })
    author: string;

    @Column({ nullable: true, type: 'text' })
    title: string;

    @Column({ nullable: true, type: 'text' })
    date: string;

    @Column({ nullable: true, type: 'text' })
    status: string;

    @ManyToOne(type => User, {
        eager: true,
        cascade: true
    })
    renter: User;

    @ManyToMany(() => Category, category => category.books, {
        eager: true,
        cascade: true
    })
    @JoinTable()
    categories: Category[];
}