import BookModel from '../models/BookModel';
import { IBook } from '../schemas/BookSchema';

class BookService {
  constructor(private _bookModel = new BookModel()) {}

  public async getBooks(): Promise<IBook[]> {
    const books = await this._bookModel.getBooks();
    return books;
  }

  public async createBook(bookData: object): Promise<IBook> {
    const book = await this._bookModel.createBook(bookData);
    return book;
  }

  public async getBook(id: string): Promise<IBook | null> {
    const data = await this._bookModel.getBook(id);
    return data;
  }

  public async updateBook(id: string, bookData: object): Promise<IBook | null> {
    const data = await this._bookModel.editBook(id, bookData);
    return data;
  }

  public async deleteBook(id: string): Promise<IBook | null> {
    const data = await this._bookModel.deleteBook(id);
    return data;
  }
}

export default BookService;
