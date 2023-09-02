import { Component, OnInit  } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Observable } from "rxjs";
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

 

users:any=[];

  constructor(private service:UserService,  private router: Router)
 {

 }

 ngOnInit() {
  this.reloadData()
}

reloadData() {
   
  this.service.getAllUser().subscribe(
    res =>{
      this.users=res;
      console.log(this.users);
      
    }
  )
  
  
}

 deleteUser(id:number):void{
    this.service.deleteUser(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    )
    ;
   
 }

 userDetails(id: number){
  this.router.navigate(['details', id]);
}

}
