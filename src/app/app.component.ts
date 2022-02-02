import { Component } from '@angular/core';
import {AccordionModule} from 'primeng/accordion'; 
import {MenuItem} from 'primeng/api';  
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RankingSystem';
  constructor(private primengConfig: PrimeNGConfig){}
  ngOnInit() {
    this.primengConfig.ripple = true;
}
}
