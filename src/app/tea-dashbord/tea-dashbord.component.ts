import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Sms/service.service';

@Component({
  selector: 'app-tea-dashbord',
  templateUrl: './tea-dashbord.component.html',
  styleUrls: ['./tea-dashbord.component.css']
})
export class TeaDashbordComponent implements OnInit {
  val:any

  constructor(private user:ServiceService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.user.gettea().subscribe((re)=>{
      const arr=re.filter((ele: any)=>{
        return ele.occupation === 'teacher'
      })
      this.val=arr
    })
  }



}
