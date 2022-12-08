import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  code=""
  searchDAta:any=[]
  constructor(private api:ApiService){}
  readValue=()=>
  {
    let data ={"code":this.code
      }
      console.log(data)
      this.api.searchData(data).subscribe(
        (response:any)=>
        {
          console.log(response)
          if (response.length==0 ) {
            alert("invalid employee code")
            
          } else 
          {
            this.searchDAta = response;
          }
        }
      )
  }
deletebtnclick=(id:any)=>
{
  let data:any={"id":id}
  this.api.deleteemployee(data).subscribe(
    (generater:any)=>
    {
      console.log=generater;
    }
  )
}
}
