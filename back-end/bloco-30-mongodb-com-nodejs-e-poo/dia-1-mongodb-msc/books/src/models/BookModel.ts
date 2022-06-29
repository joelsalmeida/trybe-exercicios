import { model as createModel } from 'mongoose';
import { BookSchema, IBook } from '../schemas/BookSchema';

class BookModel {
  constructor(private _bookModel = createModel<IBook>('books', BookSchema)) {}

  public async getBooks(): Promise<IBook[]> {
    const books = await this._bookModel.find();
    return books;
  }

  public async createBook(bookData: object): Promise<IBook> {
    const book = await this._bookModel.create(bookData);
    return book;
  }

  public async getBook(id: string): Promise<IBook | null> {
    const book = await this._bookModel.findOne({ _id: id });
    return book;
  }

  public async editBook(id: string, bookData: object): Promise<IBook | null> {
    const book = await this._bookModel.findOneAndUpdate(
      { _id: id },
      { ...bookData },
      { new: true }
    );
    return book;
  }

  public async deleteBook(id: string): Promise<IBook | null> {
    const book = await this._bookModel.findOneAndDelete({ _id: id });
    return book;
  }
}

export default BookModel;
