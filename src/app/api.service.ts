import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Step } from './model/step';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {

    baseURL: string = "http://localhost:3000/api/";

    constructor(private http: HttpClient) {
    }

    getStep(id?: string, number?: number, desc?: string): Observable<Step[]> {
        let filter = "";
        if(id!==undefined || number!==undefined || desc!==undefined){
            filter = "?";
        }
        filter+=id?"_id="+id:"";
        filter+=number?"number="+number:"";
        filter+=desc?"description="+desc:"";
        console.log('getStep ' + this.baseURL + 'step' + filter);
        return this.http.get<Step[]>(this.baseURL + 'step' + filter);
    }

    addStep(step: Step): Observable<any> {
        const headers = { 'content-type': 'application/json' }
        const body = JSON.stringify(step);
        console.log(body)
        return this.http.post(this.baseURL + 'step', body, { 'headers': headers })
    }

}