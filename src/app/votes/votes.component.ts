import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  @Output() vote = new EventEmitter<number>();

  totalUpVotes: number = 0;
  totalDownVotes: number = 0;

  constructor() { }
  upVote(){
    this.totalUpVotes += 1
    this.vote.emit(this.totalUpVotes) 
  }
  downVote(){
    this.totalDownVotes += 1
    this.vote.emit(this.totalDownVotes)
  }
  ngOnInit(): void {
  }

}
