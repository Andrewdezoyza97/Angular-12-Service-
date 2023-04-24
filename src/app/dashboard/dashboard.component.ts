import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Book } from "app/models/book";
import { allBooks, allReaders } from 'app/data';
import { Reader } from "app/models/reader";
import { LoggerService } from 'app/core/logger.service';
import { DataService } from 'app/core/data.service';
import { BookTrackerError } from 'app/models/bookTrackerError';
import { error } from 'console';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  allBooks: Book[];
  allReaders: Reader[];
  mostPopularBook: Book;


  constructor(private loggerService: LoggerService,
    private dataService: DataService) {
    this.loggerService.log('Creating the Dashboard !');
  }

  ngOnInit() {
    this.allBooks = this.dataService.getAllBooks();
    this.dataService.getAllReaders().subscribe(
      (data: Reader[] | BookTrackerError) => this.allReaders = <Reader[]>data,
      (err: BookTrackerError) => this.loggerService.log(err.friendlyMessage),
      () => this.loggerService.log('All done getting readers !')
    );
    this.mostPopularBook = this.dataService.mostPopularBook;

    this.dataService.getAuthorRecommendation(1)
      .then(
        (author: string) => this.loggerService.log(author),
        (err: string) => this.loggerService.error(`The promise was rejected : ${err}`)
      )
      .catch((error : Error) => this.loggerService.error(error.message));

    this.loggerService.log('Done with dashboard intialization.');
  }

  deleteBook(bookID: number): void {
    console.warn(`Delete book not yet implemented (bookID: ${bookID}).`);
  }

  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }

}
