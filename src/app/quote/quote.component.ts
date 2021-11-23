import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    {id:1, name:'The purpose of our lives is to be happy', author: 'Dalai Lama'},
    {id:2,name:'Life is what happens when you’re busy making other plans.', author: 'John Lennon'},
    {id:3,name:'Get busy living or get busy dying.', author: 'Stephen King'},
    {id:4,name:'You only live once, but if you do it right, once is enough.', author: 'Mae West'},
    {id:5,name:'Many of life’s failures are people who did not realize how close they were to success when they gave up.', author: 'Thomas A.Edison'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
