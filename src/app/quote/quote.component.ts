import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote (1, 'The purpose of our lives is to be happy', 'Dalai Lama',new Date (1999,10.10)),
    new Quote (2, 'Life is what happens when you’re busy making other plans.', 'John Lennon',new Date (1999,10.10)),
    new Quote (3, 'Get busy living or get busy dying.', 'Stephen King',new Date (1999,10.10)),
    new Quote (4, 'You only live once, but if you do it right, once is enough.', 'Mae West',new Date (1999,10.10)),
    new Quote (5, 'Many of life’s failures are people who did not realize how close they were to success when they gave up.', 'Thomas A.Edison',new Date (1999,10.10)),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete, index){
    if(isComplete) {
      this.quotes.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
