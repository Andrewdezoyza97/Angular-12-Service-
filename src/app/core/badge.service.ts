import { Injectable } from '@angular/core';

@Injectable()
export class BadgeService {

  constructor() { }

  getReaderBadge(minitesRead: number): string {
    if (minitesRead > 5000) {
      return 'Book  Worm';
    }
    else if (minitesRead > 2500) {
      return 'Page Turner';
    }
    else {
      return 'Getting Started';
    }
  }
}
