import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, Subscription, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import {Post, UserService} from './ng-list.service'
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';



//Definir la classe i les variables

@Component({
  selector: 'app-ng-list',
  templateUrl: './ng-list.component.html',
  styleUrls: ['./ng-list.component.scss'],
})

//exportar la classe creada

export class NgListComponent {
  posts: Post[];
  findText: string;
  filteredPosts: Post[];
  searchForm: FormGroup = new FormGroup({
    search: new FormControl('')
  })


  public usersList: Array<any> = [];

  constructor(private service:UserService, private router: Router) { 
  
  }

  redirectPage(id: Number){
    this.router.navigate(["redirected-list",id])
  }

  ngOnInit() {

    this.service.searchText.pipe(
      debounceTime(1000)
    ).subscribe({
      next: (next) => {
        this.findText = next;
        console.log(this.findText);
        if(this.findText != ''){
          this.filteredPosts = this.posts.filter((post) => post.title.includes(this.findText) );
        }
        else {
          this.filteredPosts = this.posts;
        }
      }
    });;
     
        this.service.getPost().subscribe({
          next: (next: any) => {
            this.posts = next;
            this.filteredPosts = next;
            this.service.post = next;
            console.log(this.posts)
          },
          error: (error) => {}
        });

        
     }

  busqueda() {
    this.service.changeText(this.findText);
  }
}
  



