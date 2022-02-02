import { Component, OnInit } from '@angular/core';
import { Students } from 'src/app/model/student.model';
import { StudentService } from 'src/app/services/student.services';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import * as _ from 'lodash';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import * as FileSaver from 'file-saver';
import jsPDF from 'jspdf';
import { DatePipe } from '@angular/common'
import 'jspdf-autotable';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';

export class StudentControl implements Students {
  constructor(public id?, public regID?, public firstName?, public lastName?, public address?, public phoneNumber?,
    public roleId?, public std?, public sec?, public image?) { }
}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [MessageService, ConfirmationService, DatePipe]
})
export class StudentsComponent implements OnInit {
  studentContrl: Students = new StudentControl();
  studentss: Students[];
  cols: any = [];
  students: Students[];
  student: Students;
  selectedStudent: Students[];
  submitted: boolean;
  studentDialog: boolean;
  date: any;
  //new code
  statuses: any[];
  exportColumns: any[];


  constructor(private datepipe: DatePipe, private service: StudentService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {

    this.cols = [
      { field: 'regID', header: 'Registration ID' },
      { field: 'firstName', header: 'First Name' },
      { field: 'lastName', header: 'Last Name' },
      { field: 'address', header: 'Address' },
      { field: 'phoneNumber', header: 'Phone Number' },
    ];
    this.getStudents();
    this.getDate();
    this.exportColumns = this.cols.map(col => ({ title: col.header, dataKey: col.field }));
  }
  openNew() {
    this.student = {};
    this.submitted = false;
    this.studentDialog = true;
    // console.log('clicked')
  }
  deleteSelectedProducts() {
    // this.confirmationService.confirm({
    //     message: 'Are you sure you want to delete the selected products?',
    //     header: 'Confirm',
    //     icon: 'pi pi-exclamation-triangle',
    //     accept: () => {
    //         this.products = this.products.filter(val => !this.selectedProducts.includes(val));
    //         this.selectedProducts = null;
    //         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
    //     }
    // });
  }

  editProduct(product: any) {
    // this.product = {...product};
    // this.productDialog = true;
  }

  deleteProduct(product: any) {
    // this.confirmationService.confirm({
    //     message: 'Are you sure you want to delete ' + product.name + '?',
    //     header: 'Confirm',
    //     icon: 'pi pi-exclamation-triangle',
    //     accept: () => {
    //         this.products = this.products.filter(val => val.id !== product.id);
    //         this.product = {};
    //         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Deleted', life: 3000});
    //     }
    // });
  }
  hideDialog() {
      this.studentDialog = false;
      this.submitted = false;
  }
  saveProduct() {
    this.submitted = true;
console.log('submitted');
    // if (this.student.firstName.trim()) {
    //     if (this.product.id) {
    //         this.products[this.findIndexById(this.product.id)] = this.product;
    //         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
    //     }
    //     else {
    //         this.product.id = this.createId();
    //         this.product.image = 'product-placeholder.svg';
    //         this.products.push(this.product);
    //         this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
    //     }

    //     this.products = [...this.products];
    //     this.productDialog = false;
    //     this.product = {};
    // }
  }
  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }
  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  getStudents() {
    this.service.getStudents().subscribe((data: any) => {
      this.students = data;
      // console.log('this.students', this.students);
    });
  }

  getEventValue($event: any): string {
    return $event.target.value;
  }

  exportPdf() {
    const doc = new jsPDF('p', 'pt');
    doc['autoTable'](this.exportColumns, this.students);
    // doc.autoTable(this.exportColumns, this.products);
    doc.save("Students" + this.date + ".pdf");
  }


  // Export the records as excel
  exportExcel() {
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.students);
      const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, "students");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    this.getDate();
    // FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    FileSaver.saveAs(data, fileName + this.date + EXCEL_EXTENSION);

  }

  getDate() {
    let year = new Date().getFullYear().toString();
    let month = new Date().getMonth().toString();
    let day = new Date().getDate().toString();
    let hour = new Date().getHours().toString();
    let minute = new Date().getMinutes().toString();
    let sec = new Date().getSeconds().toString();
    this.date = year + month + day + '_' + hour + minute + sec;
    console.log('datetime', this.date);
  }

}
