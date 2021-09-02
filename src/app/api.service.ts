import { HttpClient } from '@angular/common/http';
import { Step, Steps } from './model/step';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApiService {

    baseURL: string = "http://localhost:3000/api/";

    constructor(private http: HttpClient) {
    }

    //#region Step
    getStep(id?: string, number?: number, desc?: string, module?: string): Observable<Step[]> {
        let filter = "";
        if (id!! || number!! || desc!! || module!!) {
            filter = "?";
        }
        filter += id ? "_id=" + id : "";
        filter += number ? "number=" + number : "";
        filter += desc ? "description=" + desc : "";
        filter += module ? "module=" + module : "";
        console.log('getStep ' + this.baseURL + 'step');
        // console.log(httpParam)
        return this.http.get<Steps>(this.baseURL + 'step' + filter).pipe(
            map((res: Steps) => res.data)
        );
    }

    saveStep(step: Step): Observable<Step> {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(step);
        console.log(body);
        return this.http.post<Step>(this.baseURL + 'step', body, { 'headers': headers }).pipe(
            map((res: Step) => res)
        );
    }

    deleteStep(id: string): Observable<Step> {
        let filter = "";
        if (id) {
            filter = "?";
        }
        filter += id ? "_id=" + id : "";
        console.log('deleteStep ' + this.baseURL + 'step');
        return this.http.delete<Step>(this.baseURL + 'step' + filter).pipe(
            map((res: Step) => res)
        );
    }
    //#endregion
}