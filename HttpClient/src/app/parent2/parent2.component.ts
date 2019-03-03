import { Component, OnInit } from '@angular/core';
import { SendDataService } from '../send-data.service';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.scss']
})
export class Parent2Component implements OnInit {
public value1:any
  constructor() { }

  ngOnInit() {
//  this.examplservic.biodata().subscribe(data =>this.value1=data)
  }

}
