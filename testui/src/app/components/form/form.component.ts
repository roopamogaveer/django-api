import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formData: User=new User();

  constructor(private api:ApiService){}

  onSubmit=()=>
  {
     this.api.addUser(this.formData).subscribe(
      (data)=>
      {
          this.api.canRefresh.next(true);
          this.formData=new User();
          console.log(data);
      },
      (error)=>
      {
        console.log(error);
        alert("Something went wrong");
      }
     )
  }
}
