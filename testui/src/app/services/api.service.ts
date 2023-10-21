import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { User } from '../models/user';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService
{

  constructor(private http:HttpClient) { }

   canRefresh:BehaviorSubject<Boolean>=new BehaviorSubject<Boolean>(false);

   api:string="http://127.0.0.1:8000/";

   addUser(user:User):Observable<any> 
   {
      return this.http.post(`${this.api}user/manage/`,user);
   }

   getAllUser():Observable<any> 
   {
      return this.http.get(`${this.api}user/manage/`);
   }


   deleteUser(email:string):Observable<any>
   {
    return this.http.delete(`${this.api}user/manage/?email=${email}`);
   }

}
