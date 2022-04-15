import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { feedback } from 'src/app/models/types';
import { ProductService } from 'src/app/services/product.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ReplyComponent } from '../reply/reply.component';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  feedbacks:feedback[]=[];
  displayedColumns: string[] = ['name','company','subject','message','email'];
  dataSource: MatTableDataSource<feedback>;

  constructor(private ps: ProductService,public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<feedback>(this.feedbacks);
    ps.getFeedbacks().subscribe({
      next:(data:feedback[])=>{
       this.feedbacks=data; console.log(this.feedbacks);
        this.dataSource = new MatTableDataSource<feedback>(this.feedbacks);
      } ,   
      error:()=>this.feedbacks=[]
    }); 
  }
submit(email:string){
  
  let dialogRef = this.dialog.open(ReplyComponent, {
    height: '500px',
    width: '600px',
  });
  let instance = dialogRef.componentInstance;
  instance.email = email;
  console.log('dialogRef',dialogRef);
}
  ngOnInit(): void {
  }

}
