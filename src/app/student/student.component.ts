import { Component, OnInit } from '@angular/core';
import { GetdetailsService } from '../getdetails.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentData:any;
  rowdata:any;

  constructor(public getdetails:GetdetailsService) {
    this.getdetails.Details().subscribe((data1)=>{
      this.studentData=data1;
    })
   }

  ngOnInit() {
  }
  getRowData(h)
  {
    this.rowdata=h;
  }
}
