import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


export type Data = {
    body: number[]
};


@Injectable({
    providedIn:'root'
})




export class RxjsService {
    constructor(private http: HttpClient) {}

    getData(){
        let url="https://cf9d3bf7-30fa-48e3-956b-9c6e48823a79.mock.pstmn.io/promises"
        return this.http.get(url);
    }


    getPromiseData() {

        return new Promise( (resolve, reject) => {
            this.getData().subscribe({
                next: (next:any) => {
                    resolve(next);
            }, 
                error: (error) => {
                    reject(error)
                }
            });
        });
    }
}