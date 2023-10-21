import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  users:User[]=[]

  constructor(private api:ApiService){}

  ngOnInit(): void 
  {
      this.loadData();

      this.api.canRefresh.subscribe(
        (value)=>
        {
          console.log("refreshed");
          this.loadData();
        }
      );
  }
  
  loadData=()=>
  {
    this.api.getAllUser().subscribe(
      (data)=>
      {
        this.users=data;
      },
      (error)=>
      {
        console.log(error);
      }
    );
  }

  deleteUser=(email:string)=>
  {
    this.api.deleteUser(email).subscribe(
      (data)=>
      {
        this.loadData();
        console.log("User deleted");
      },
      (error)=>
      {
        console.log(error);
        alert("Unable to delete");
      }
    )
  }

  
}
