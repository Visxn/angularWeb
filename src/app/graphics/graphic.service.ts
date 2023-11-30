import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export type Data = {
     body: number[]
};

@Injectable({
    providedIn:'root'
})

export class ApiService{
    
    data: Data[];

    constructor(private http:HttpClient){ }
    
    private getData(){
        let url="https://3e10a49c-9c72-4e9d-a0c4-44883937c153.mock.pstmn.io/random-list"
        return this.http.get(url);
    }

    getChartData() {
        return new Promise( (resolve, reject) => {
            this.getData().subscribe({
                next: (next: any) =>{
                    resolve(next);
                },
                error: (error) => {
                    reject(error)
                }
            });
        } );
    }
  

}


