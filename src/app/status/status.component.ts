import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../payments.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  private message:string = "";

  constructor(private ps:PaymentsService ) { }

  getStatus():void  {
    //this.message = this.ps.getPayments();
    console.log('inside getStatus');
    //this.ps.getPayments().subscribe(msg => console.log(msg)); 
    this.ps.getPayments().subscribe(msg => this.message = msg.name);
  }
  
  ngOnInit() {
    console.log('inside ngOnInit');
    this.getStatus();
  }

}
