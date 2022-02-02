import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  items: any = [];
  display:any=true;

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
