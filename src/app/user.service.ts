import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:Observable<User[]>

  basedUrl:string="http://localhost:8089/api/user";

  constructor(private http:HttpClient) { }


  getAllUser():Observable<any>
  {
    // console.log(this.basedUrl);
    // this.users= this.http.get<any[]>(this.basedUrl)
    // console.log(this.users);
    
    
    return this.http.get<any>(this.basedUrl)

  }

  getUser(id:any):Observable<any>
  {
    return this.http.get(`${this.basedUrl}/${id}`);
  }

  createUser(user: User): Observable<any> {
    return this.http.post(`${this.basedUrl}`, user);
  }


  updateUser(id: number, value: User): Observable<any> {
    return this.http.put(`${this.basedUrl}/${id}`, value);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.basedUrl}/${id}`, { responseType: 'text' });
  }

}
