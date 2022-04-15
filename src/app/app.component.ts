import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routhing-app-angular';
  constructor(private log:LoginService,private router:Router)
  {
    this.AfterViewInt();
  }
  
  ngOnInit() {
    console.log("onInit called")
  }
  ngDoCheck(){
    console.log("do check")
  }
  AfterViewInt(){
    if(!this.log.getStatus())
    this.router.navigate(['login'])
  else
  {
    if(this.log.usertype=="admin")
    this.router.navigate(['admin/home']);
    else
    this.router.navigate(['user/home']);
  }
  }
  clickMe(){
    console.log("link clicked")
  }
}
