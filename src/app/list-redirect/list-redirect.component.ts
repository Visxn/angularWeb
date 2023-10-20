import { Component } from '@angular/core';
import { UserService } from '../ng-list/ng-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-redirect',
  templateUrl: './list-redirect.component.html',
  styleUrls: ['./list-redirect.component.scss']
})


export class ListRedirectComponent {
  title: string;
  postId: number;
  

  constructor( private service: UserService, private activatedRoute: ActivatedRoute ){
    this.activatedRoute.params.subscribe({
        next: (next: any) => {
          this.postId = next["id"];
        },
        error: (error) => {}
      });
    
  }
 
  ngOnInit(){
    this.title = this.service.post.filter( (post) => post.id = this.postId)[0].title;
  }

}
