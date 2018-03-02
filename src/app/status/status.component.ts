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
    console.log('inside getStatus');
    //this.ps.getPayments().subscribe(msg => this.message = msg.name);
    this.message = "yohoo";
  }
  
  ngOnInit() {
    console.log('inside ngOnInit');
    this.getStatus();
  }

}
