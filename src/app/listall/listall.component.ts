import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-listall',
  templateUrl: './listall.component.html',
  styleUrls: ['./listall.component.css']
})
export class ListallComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
    this.myapi.listall().subscribe(
      (data)=>{
        this.trainData = data
      }
    )
   }
  trainData:any={}
  ngOnInit(): void {
  }

}
