import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }


  getUser(){
     return this.http.get<any>("http://localhost:3000/data")
    }


    gettea(){
      return this.http.get<any>("http://localhost:3000/data")
    }

    deleteStudent(id:number){
      console.log(id);
      return this.http.delete<any>(`http://localhost:3000/data${id}`)
    }
  


}
function res(res: any): import("rxjs").OperatorFunction<any, unknown> {
  throw new Error('Function not implemented.');
}

