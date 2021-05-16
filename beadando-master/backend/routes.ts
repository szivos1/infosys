import { Router } from 'express';
import { CategoryController } from './src/controller/category.controller';
import { BookController } from './src/controller/book.controller';
import { UserController } from './src/controller/user.controller';

export function getRouter() {
    const router = Router();

    const userController = new UserController();
    const bookController = new BookController();
    const categoryController = new CategoryController();

    router.get('/users', userController.getAll);
    router.get('/users/:id', userController.getOne);
    router.post('/users', userController.create);
    router.put('/users', userController.update);
    router.delete('/users/:id', userController.delete);

    router.get('/books', bookController.getAll);
    router.get('/books/:id', bookController.getOne);
    router.post('/books', bookController.create);
    router.put('/books', bookController.update);
    router.delete('/books/:id', bookController.delete);

    router.get('/categories', categoryController.getAll);
    router.get('/categories/:id', categoryController.getOne);
    router.post('/categories', categoryController.create);
    router.put('/categories', categoryController.update);
    router.delete('/categories/:id', categoryController.delete);

    return router;
}
