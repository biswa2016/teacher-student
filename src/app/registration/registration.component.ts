import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private http:HttpClient,private route:Router) { }

  regForm = new FormGroup({
    uname:new FormControl("",Validators.required),
    email:new FormControl("",Validators.required),
    gender:new FormControl("",Validators.required),
    // password:new FormControl("",Validators.required),
    // male:new FormControl("",Validators.required),
    // female:new FormControl("",Validators.required),
    // teacher:new FormControl("",Validators.required),
    occupation:new FormControl("",Validators.required),
    student:new FormControl("",Validators.required),
    uid:new FormControl("",Validators.required),

  })

  get uname(){return this.regForm.get("uname")}
  get email(){return this.regForm.get("email")}
  get password(){return this.regForm.get("unapasswordme")}
  get gender(){return this.regForm.get("gender")}
  // get male(){return this.regForm.get("male")}
  // get female(){return this.regForm.get("female")}
  // get teacher(){return this.regForm.get("teacher")}
  // get student(){return this.regForm.get("student")}
  get occupation(){return this.regForm.get("occupation")}
  get uid(){return this.regForm.get("uid")}


  ngOnInit(): void {
  }

  reg(){
    console.log(this.regForm.value);
    if(this.regForm.value.teacher === true){
      this.http.post<any>("http://localhost:3000/data",this.regForm.value).subscribe((res)=>{
        window.alert('Registration Successfully') 
        console.log(this.regForm.value);
        this.route.navigate(['log'])

      })
         
    }else{

      this.http.post<any>("http://localhost:3000/data",this.regForm.value).subscribe((res)=>{
        window.alert('Registration Successfully') 
        this.route.navigate(['log'])
        
      })
    }

  }

}
