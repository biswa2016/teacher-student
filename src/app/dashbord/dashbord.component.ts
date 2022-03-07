import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../Sms/service.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  selectedProduct:any

  value:any
  product: any;
  id: any;

  constructor( private user:ServiceService,private http:HttpClient,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData()

    this.id = this.route.snapshot.params['i']
    console.log(this.id);

    this.http.get<any>(`http://localhost:3000/data`).subscribe((res) => {
      console.log(res);
      this.product = res
      console.log(this.product);
      for (let data of this.product) {
        //  console.log(d._id); //id is generated in consloe
        if (this.id === data._id) {
          this.selectedProduct = data;
          console.log(this.selectedProduct);

        }

      }


    })
  }

  getData(){
     this.user.getUser().subscribe((re)=>{
       console.log(re );
      const newarr=re.filter((ele:any)=>{
        return ele.occupation==='student'
      })
      this.value=newarr  

       
     })
  }

  login(form:NgForm){
    console.log(form.value);
    this.http.put<any>(`http://localhost:3000/data/${this.selectedProduct.id}`,form).subscribe((res)=>{
      console.log(res);
    }) 
      form.reset()
      alert("Product updated succesfully") 
    
  }

  deleteData(id: any){
   return this.http.delete<any>(`http://localhost:3000/data/${id}`).subscribe((re)=>{
         alert("Are you Sure!!!")

         console.log(re);
         
    })
  }

  dataSubmit()
  {
    // alert("Succesfully edited")
  }

 



}
