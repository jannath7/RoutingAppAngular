import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  name:any;
  email:any;
  company:any;
  message:any;
  subject:any;
  constructor(private hs : ProductService) { }

  ngOnInit(): void {
  }
  submit(){
    let expr=/^[a-z][a-z\._0-9]+@[a-z]+\.(com|net|co\.in|in)$/;

        let obj={
          id: Math.round(Math.random()*1000),
          name: this.name,
          email: this.email,
          company: this.company,
          message: this.message,
          subject: this.subject
        }
        console.log(obj);
        this.hs.postEnquiry(obj).subscribe({
          next: ()=>{
            alert("You enquiry is posted")
            this.name="",
            this.subject="",
            this.email="",
            this.message="",
            this.company=""
          },
          error: ()=>alert("there is a problem posting your equiry")
        }
        )

      }

  }

  

