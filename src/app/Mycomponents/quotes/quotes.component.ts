import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/Quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  localItem: string | null;
  quotes!: Quote[];
  
  constructor() {
    this.localItem = localStorage.getItem("quotes");
    if(this.localItem == null){
      this.quotes = [];
    }
    else{
      
      this.quotes = JSON.parse(this.localItem);
    }
    
   }

  ngOnInit(): void {
  }

  deletequote(quote: Quote){
    console.log(quote);
    const index = this.quotes.indexOf(quote);
    this.quotes.splice(index,1);
    localStorage.setItem("quotes",JSON.stringify(this.quotes));

  }
  addquote(quote: Quote){
    console.log(quote);
    this.quotes.push(quote);
    localStorage.setItem("quotes",JSON.stringify(this.quotes));
  }
  togglequote(quote: Quote){
    const index = this.quotes.indexOf(quote);
    this.quotes[index].status = !this.quotes[index].status;
    localStorage.setItem("quotes",JSON.stringify(this.quotes));
  }

}
