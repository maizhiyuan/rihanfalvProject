import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  public arr:any[]=[['陈顺兴等故意伤害案','2019-2-2'],['这是标题','2019-1-29'],['. 陈顺兴等故意伤害案','2019-1-24'],['这是标题','2019-1-2']]
  constructor() { }
  ngOnInit() {
  }

}
