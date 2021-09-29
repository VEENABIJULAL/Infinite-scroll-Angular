import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from './service/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  page: number = 1; 
  Name!: string;
  constructor(private http: HttpClient,private dataservice: DataService,private spinner: NgxSpinnerService){}
  Products: any=[];
  notEmptyPost = true;
 notscrolly = true;
  ngOnInit(){
    this.loadInitPost();
  }
// load the Initial 6 posts
loadInitPost() {
  
   this.dataservice.getData().subscribe((result:any)=>{
    if(result){
      this.Products=result
      console.log(this.Products)
    }
   },
   (result)=>{
alert(result.error.message)
   
  })
}
onScroll(){
  console.log("scrolled")
  const length=this.Products.length;
  console.log(length);
  setTimeout(()=>{
    const p:any=' '.repeat(4).split('').map((s,i)=> i + 1 + length);
    console.log(p.length);
    while (p.length) {
      this.Products.push(p.shift());
    }
  },1000);
    
   }


}
