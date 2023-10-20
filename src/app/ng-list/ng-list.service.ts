import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

export type Post = {
    id: number,
    body: string,
    title: string,
    userId: number
};

@Injectable({
    providedIn:'root'
})

export class UserService{

    searchText: BehaviorSubject<string> = new BehaviorSubject<string>('');

    changeText(text: string) {
        this.searchText.next(text);
    }
    
    post: Post[];

    constructor(private http:HttpClient){ }
    
    getPost(){
        let url="http://jsonplaceholder.typicode.com/posts"
        return this.http.get(url);
    }
}