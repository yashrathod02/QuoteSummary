import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quote } from 'src/app/Quote';

@Component({
  selector: 'app-quotes-dis',
  templateUrl: './quotes-dis.component.html',
  styleUrls: ['./quotes-dis.component.css']
})
export class QuotesDisComponent implements OnInit {

  @Input()
  quote!: Quote;
  @Output()
  quotedelete: EventEmitter<Quote> = new EventEmitter();
  @Output()
  quotecheckbox: EventEmitter<Quote> = new EventEmitter();  

  constructor() { }

  ngOnInit(): void {
  }
  onclick(quote: Quote){
    this.quotedelete.emit(quote);
    console.log("onclick has been triggred")
  }
  oncheckboxClick(quote: Quote){
    this.quotecheckbox.emit(quote);
    console.log(quote)

  }

}
