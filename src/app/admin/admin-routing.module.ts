import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ComplaintsComponent } from './home/complaints/complaints.component';
const routes: Routes = [
  {
    path:"home",
    component:HomeComponent,
    children:[
      {
        path:"",
        component:AdminhomeComponent,
      },
      {
        path:"complaints",
        component:ComplaintsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
