import { Category } from "./category";
import { User } from "./user";

export interface Book {
    id: string;
    type: string;
    author: string;
    title: string;
    date: string;
    status: string;
    renter: User;
    categories: Category[];
}
