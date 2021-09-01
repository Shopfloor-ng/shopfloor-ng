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
        if (id !== undefined || number !== undefined || desc !== undefined || module !== undefined) {
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

    addStep(step: Step): Observable<any> {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(step);
        console.log(body);
        return this.http.post(this.baseURL + 'step', body, { 'headers': headers })
    }
    //#endregion
}