import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError, tap } from "rxjs/operators"
import * as _ from 'lodash';
import { Config } from "@fortawesome/fontawesome-svg-core";

const opt={
    headers: new HttpHeaders({
        'Content-Type':'application/json'
    })
};

@Injectable()
export class ServiceGateway {
    constructor (private http: HttpClient) { }


    
    public getWithNoAuth(url: string): Observable<any> {
        console.log('url',url);
        // var data= this.http.get(url, opt)
        var data = this.http.get<Config>(url)
        // .pipe(catchError(this.handleError<any>('Exception Occured')));
        console.log('data',data)
        return data;
    }

    private dataBind(resp:Response)
    {
        let data = resp;
        return data || new Array<any>();
    }

    private handleError<T> (operation ='operation', result?: T)
    {
        return (error: any): Observable<T> => {
            console.error(error);
            console.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }
}