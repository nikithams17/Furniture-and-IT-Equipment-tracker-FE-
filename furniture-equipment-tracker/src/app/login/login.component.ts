import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user=new User();
  msg ='';
  constructor(private _service: RegistrationService, private _router:Router) { }

  ngOnInit(): void {
  }
  loginUser(username:string,password:string){
    this._service.loginUserFromRemote().subscribe(
      res =>{
        const use=res.find((a:any)=>{
          return a.username===username && a.password===password;
        })
        if(use){
          alert("Login is successfull")
          this._router.navigate(['/loginsuccess'])
        }
        else{
          alert("username and password not found");
        }
      },
      ()=>{
        console.log("Exception occured");
        this.msg="Bad credentials, please enter valid username and password";
      }  
    );
  }
  gotoregistration(){
    this._router.navigate(["/registration"])
  }
}
