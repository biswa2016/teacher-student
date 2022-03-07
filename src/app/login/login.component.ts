import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if(form.value.teacher === true){
      this.http.post<any>("http://localhost:3000/lteacher", form.value).subscribe((res) => {
      window.alert('Registration Successfully')
    })
    }else {
      this.http.post<any>("http://localhost:3000/lstudent", form.value).subscribe((res) => {
      window.alert('Registration Successfully')
    })
    }
  }

}
