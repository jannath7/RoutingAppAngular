import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  from:string="";
  email:any;
  company:any;
  message:any;
  subject:any;
  constructor() { 
    this.from="admin@organicfarm.com"
  }

  ngOnInit(): void {
  }
submit(){
  
}
}
