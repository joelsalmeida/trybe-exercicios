import { Request, Response } from 'express';
import BookService from '../services/BookService';

class BookController {
  constructor(private _bookService = new BookService()) {}

  notFound = 'Book not found';
  internalError = 'Internal server error';

  public getBooks = async (_req: Request, res: Response): Promise<Response> => {
    try {
      const books = await this._bookService.getBooks();
      return res.status(200).send(books);
    } catch (err: unknown) {
      return res.status(500).send({ message: this.internalError });
    }
  };

  public create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const book = await this._bookService.createBook(req.body);
      return res.status(201).send(book);
    } catch (err: unknown) {
      return res.status(500).send({ message: this.notFound });
    }
  };

  public getBook = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const book = await this._bookService.getBook(id);

      if (book) {
        return res.status(200).send(book);
      }

      return res.status(404).send({ message: this.notFound });
    } catch (err: unknown) {
      return res.status(500).send({ message: this.internalError });
    }
  };

  public updateBook = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const book = await this._bookService.updateBook(id, req.body);

      if (book) {
        return res.status(200).send(book);
      }

      return res.status(404).send({ message: this.notFound });
    } catch (err: unknown) {
      return res.status(500).send({ message: this.internalError });
    }
  };

  public deleteBook = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const book = await this._bookService.deleteBook(id);

      if (book) {
        return res.status(200).send(book);
      }

      return res.status(404).send({ message: this.notFound });
    } catch (err: unknown) {
      return res.status(500).send({ message: this.internalError });
    }
  };
}

export default BookController;
