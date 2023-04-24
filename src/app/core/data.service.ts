import { Injectable } from '@angular/core';
import{  HttpClient} from '@angular/common/http';
import { LoggerService } from './logger.service';
import { Reader } from 'app/models/reader';
import { allBooks, allReaders } from 'app/data';
import { Book } from 'app/models/book';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {

  mostPopularBook: Book = allBooks[0];

  constructor(private loggerService: LoggerService,
    private http : HttpClient){ }

  setMostPopularBook(popularBook: Book): void {
    this.mostPopularBook = popularBook;
  }

  getAllReaders():Observable <Reader[]> {
    return this.http.get< Reader[]>('/api/readers');
  }

  getReaderById(id: number): Reader {
    return allReaders.find(reader => reader.readerID === id);
  }

  getAllBooks(): Book[] {
    return allBooks;
  }

  getBookById(id: number): Book {
    return allBooks.find(book => book.bookID === id);
  }

}
