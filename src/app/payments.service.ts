import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Message } from '../app/Message';

@Injectable()
export class PaymentsService {

  private url = 'http://localhost:8080/status';

  constructor(private http: HttpClient) { }

  getPayments(): Observable<Message>{
    console.log('inside payments service - getPayments()');
    return this.http.get<Message>(this.url);
  }
}
