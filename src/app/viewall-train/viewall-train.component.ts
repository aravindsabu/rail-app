import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewall-train',
  templateUrl: './viewall-train.component.html',
  styleUrls: ['./viewall-train.component.css']
})
export class ViewallTrainComponent implements OnInit {

  constructor() { }
  status:boolean=false
  readvalue=()=>{
    this.name="raju"
    this.status=true
  }
  name="aravind"

  ngOnInit(): void {
  }

}
