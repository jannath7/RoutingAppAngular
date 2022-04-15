import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './userhome/product/product.component';
import { ProductrowComponent } from './userhome/productrow/productrow.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './userhome/details/details.component';
import { ContactusComponent } from './home/contactus/contactus.component';


@NgModule({
  declarations: [
    HomeComponent,
    UserhomeComponent,
    ProductComponent,
    ProductrowComponent,
    DetailsComponent,
    ContactusComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class UserModule { }
