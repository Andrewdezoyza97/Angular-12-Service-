import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AddBookComponent } from './add-book/add-book.component';
import { AddReaderComponent } from './add-reader/add-reader.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { EditReaderComponent } from './edit-reader/edit-reader.component';
import { LoggerService } from './core/logger.service';
import { DataService } from './core/data.service';
import{  HttpClientModule} from '@angular/common/http';
import { PlainLoggerService } from './core/plain-logger.service';
import { dataServiceFactory } from './core/data.service.factory';
import { BookTrackerError } from './models/bookTrackerError';
import { BookTrackerErrorHandlerService } from './core/book-tracker-error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddBookComponent,
    EditReaderComponent,
    EditBookComponent,
    AddReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [

    DataService,
    LoggerService,
    {provide : ErrorHandler, useClass : BookTrackerErrorHandlerService}
    // {provide : LoggerService, useValue:{
    //   log:(message : string) => console.log(`MESSAGE : ${message}`),
    //   error:(message:string) => console.log(`PROBLEM : ${message}`)
      
    // }},
    // {provide:DataService, useFactory :dataServiceFactory, deps:[LoggerService]}
    // PlainLoggerService,
    // { provide : LoggerService , useExisting : PlainLoggerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
