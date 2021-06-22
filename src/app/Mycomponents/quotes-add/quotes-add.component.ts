import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from 'src/app/Quote';

@Component({
  selector: 'app-quotes-add',
  templateUrl: './quotes-add.component.html',
  styleUrls: ['./quotes-add.component.css']
})
export class QuotesAddComponent implements OnInit {

  qno!: number;
  customer_name!: string;
  order_desc!: string;
  price!: number;
  @Output()
  quoteAdd: EventEmitter<Quote> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const quote ={
      qno: this.qno,
      customer_name: this.customer_name,
      order_desc: this.order_desc,
      price: this.price,
      status: true
      

    }
    this.quoteAdd.emit(quote);
  }

}
