import { Router } from 'express';

import BookController from './controllers/BookController';

const bookController = new BookController();
const routes = Router();

const routeBooksId = '/books/:id';

routes.get('/books', bookController.getBooks);
routes.get(routeBooksId, bookController.getBook);

routes.post('/books', bookController.create);

routes.put(routeBooksId, bookController.updateBook);

routes.delete(routeBooksId, bookController.deleteBook);

export default routes;
