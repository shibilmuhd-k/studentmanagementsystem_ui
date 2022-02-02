import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MessageService,ConfirmationService]
})

export class DashboardComponent implements OnInit {
  productDialog: any= false;

  // products: Product[];

  // product: Product;

  // selectedProducts: Product[];

  // submitted: boolean;

  // statuses: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
