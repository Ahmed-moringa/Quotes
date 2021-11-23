import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  
  newQuote= new Quote(0, "", "", new Date());
  @Output() addGoal = new EventEmitter<Quote>();
  
  submitGoal(){
    this.addGoal.emit(this.newQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
