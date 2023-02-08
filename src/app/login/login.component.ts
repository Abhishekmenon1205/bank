import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  data="Your Perfect Banking Partner"
  
  inputplaceholder="Account Number"

   
  // acno:any
  
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }
// model form
loginForm=this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psw:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]+')]]
})

  ngOnInit(): void {
  }
login(){
  // alert('login clicked')
  var acnum=this.loginForm.value.acno
  var psw=this.loginForm.value.psw
  if (this.loginForm.valid) {
    const result=this.ds.login(acnum,psw)
  if (result) {
    alert('login sucess')
    this.router.navigateByUrl('dashboard')
  }
  else{
    alert("incurrect acno or password")
  }

    
  }
  else{
    alert("invalid form")
  }
  
}







// login(a:any,b:any){
//   var acnum=a.value
//   var psw=b.value
//    var userDetails=this.userDetails
//   if (acnum in userDetails) {
//     if(psw==userDetails[acnum]["password"]){
//       alert("login sucess")
//     }
//     else{
//       alert("incorrect password")
//     }
    
//   }
//   else{
//         alert("acno incorrect or not registered yet")
//   }


//  }


// acnoChange(event:any){
//   this.acno=event.target.value
//   // console.log(this.acno);
//   }

//   pswrdChange(event:any){
//     this.psw=event.target.value
//     // console.log(this.psw);
    

//   }
}


