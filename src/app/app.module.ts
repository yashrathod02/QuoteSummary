import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './Mycomponents/quotes/quotes.component';
import { QuotesDisComponent } from './Mycomponents/quotes-dis/quotes-dis.component';
import { QuotesAddComponent } from './Mycomponents/quotes-add/quotes-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesDisComponent,
    QuotesAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
