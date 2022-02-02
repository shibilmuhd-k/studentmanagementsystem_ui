import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_URLS } from "../config/config";
import { ServiceGateway } from "./servicegateway.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root',
})

export class StudentService {
    studentData: any = [];
    constructor(private gateway: ServiceGateway,
        private http:HttpClient) {}

    public getAllStudents(): Observable<any> {
    var data1 = this.gateway.getWithNoAuth(API_URLS.Students_URL)
    return data1;

   
    }
    public getStudents()
    {
        let url = 'http://localhost:5000/api/Student'
        return this.http.get<any>(url);
    }
}

