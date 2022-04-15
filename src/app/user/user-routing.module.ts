import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './home/contactus/contactus.component';
import  {HomeComponent} from './home/home.component';
import { DetailsComponent } from './userhome/details/details.component';
import { UserhomeComponent } from './userhome/userhome.component';
const routes: Routes = [
  {
    path:"home",
    component:HomeComponent,
    children:[
      {
        path:"",
        component:UserhomeComponent,
      },
      {
        path:"details",
        component:DetailsComponent,
      },
      {
        path:"contactus",
        component:ContactusComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
