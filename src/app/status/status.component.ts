import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../payments.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  message:string = "";
  //ipAddress:string = "151.101.128.81";
  ipAddress:string = "";

  constructor(private ps:PaymentsService ) { }

  getStatus():void  {
    console.log('inside getStatus');
    this.ps.getPayments(this.ipAddress).subscribe(msg => this.message = msg.country);
    //this.message = "yohoo";
  }
  
  ngOnInit() {
    console.log('inside ngOnInit');
    //this.getStatus();
  }

}
