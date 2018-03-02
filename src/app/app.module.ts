import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { PaymentsService } from './payments.service';


@NgModule({
  declarations: [
    AppComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PaymentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
