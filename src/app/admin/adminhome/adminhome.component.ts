import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { product } from 'src/app/models/types';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
  products:product[]=[];
  displayedColumns: string[] = ['name','price','description','type'];
  dataSource: MatTableDataSource<product>;

  
constructor(private ps: ProductService) {
  this.dataSource = new MatTableDataSource<product>(this.products);
  ps.getProducts().subscribe({
    next:(data:product[])=>{
      this.products=data; console.log(this.products);
      this.dataSource = new MatTableDataSource<product>(this.products);
    } ,    

    error:()=>this.products=[]
    
  }); 
    

}
  ngOnInit(): void {

  }
}
