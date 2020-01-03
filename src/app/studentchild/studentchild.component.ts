import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-studentchild',
  templateUrl: './studentchild.component.html',
  styleUrls: ['./studentchild.component.css']
})
export class StudentchildComponent implements OnInit {
  rowdata: any;

  constructor() { }
@Input() details;
  ngOnInit() {
  }

}
