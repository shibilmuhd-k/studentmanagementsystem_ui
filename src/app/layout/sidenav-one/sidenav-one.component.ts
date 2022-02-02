import { Component, OnInit} from '@angular/core';
import {SidebarModule} from 'primeng/sidebar';
@Component({
  selector: 'app-sidenav-one',
  templateUrl: './sidenav-one.component.html',
  styleUrls: ['./sidenav-one.component.css']
})
export class SidenavOneComponent implements OnInit {
  display:any=true;
  items: any = [];

  constructor() { }
  ngOnInit(): void {
    this.items = [
      // {
      //   "id": "1",
      //   "label":"home",
      //   "link":"home"
      // },
      {
        "id": "1",
        "label":"Attendance",
        "link":"",
        "child":[
          {
            "label":"Students 1",
            "link":"students1",
          },
          {
            "label":"Students 2",
            "link":"students1",
          },{
            "label":"Students 3",
            "link":"students1",
          },{
            "label":"Students 4",
            "link":"students1",
          },
        ]
      },
      {
        "id": "1",
        "label":"Students2",
        "link":"students2",
        "child":[]
      },
      // {
      //   "id": "2",
      //   "label":"home",
      //   "link":"home"
      // },
    ];
  }

}
