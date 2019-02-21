import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Router,NavigationExtras} from '@angular/router';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

 

  public arr:any[]=[];
  public CollectionMsg:any[]=[];
  public UserID:number=1;
  


  constructor(private router: Router, public http:HttpClient) { }
  ngOnInit() {
    this.CollectionMsg.length=0
    const httpOptions = {headers: new HttpHeaders({ 'Content-Type':'application/json'})};

       var api ='http://localhost:4000/collection';
       this.http.post(api,{"userid":this.UserID},httpOptions).subscribe((response:any)=>{

         this.arr=response;
         

         for( var i=0;i<100;i++){
           if(this.arr[i].CollectionTime.length<3){
             break;
           } 
           this.CollectionMsg[i]=this.arr[i];
           
           
         }
     
         console.log(response);
       })
     
  }
  specificContent(CollectionType,CollectionContentID){

    if(CollectionType=="case"){
      let Contentid: NavigationExtras = {             
      queryParams: { ContentID:CollectionContentID },                
    };       
    this.router.navigate(['/case'],Contentid) ;
    }
    if(CollectionType=="thesis"){
      let Contentid: NavigationExtras = {             
      queryParams: { ContentID:CollectionContentID },                
    };       
    this.router.navigate(['/thesis'],Contentid) ;
    }
    
  }


}
