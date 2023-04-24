import { Component, OnInit, Version, VERSION} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Book } from "app/models/book";
import { allBooks, allReaders } from 'app/data';
import { Reader } from "app/models/reader";
import { LoggerService } from 'app/core/logger.service';
import { DataService } from 'app/core/data.service';
import { BookTrackerError } from 'app/models/bookTrackerError';
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
    private dataService: DataService,
    private title : Title) {
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

    this.getAuthorReccomdationAsync(1)
      .catch(err => this.loggerService.error(err));

      // this.title.setTitle(`Book Tracker ${VERSION.full}`);

    this.loggerService.log('Done with dashboard intialization.');
    throw new Error('Ugly technical Error !');
  }

  private async getAuthorReccomdationAsync(readerID: number): Promise<void> {
    let author: string = await this.dataService.getAuthorRecommendation(readerID);
    this.loggerService.log(author);
  }

  deleteBook(bookID: number): void {
    console.warn(`Delete book not yet implemented (bookID: ${bookID}).`);
  }

  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }

}
