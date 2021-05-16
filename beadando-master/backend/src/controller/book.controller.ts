import { getRepository } from "typeorm";
import { Book } from "../entity/Book";
import { Controller } from "./controller";

export class BookController extends Controller {
    repository = getRepository(Book);

    getAll = async (req, res) => {
        const search = req.query.search || '';

        try {
            const entities = await this.repository
                .createQueryBuilder('book')
                .where("book.title LIKE CONCAT('%', :search, '%')", { search: search })
                .orWhere("book.author LIKE CONCAT('%', :search, '%')", { search: search })
                .leftJoinAndSelect('book.renter', 'renter')
                .leftJoinAndSelect('book.categories', 'category')
                .getMany();
            res.json(entities);
        } catch (err) {
            console.error(err);
            this.handleError(res);
        }


    }
}
