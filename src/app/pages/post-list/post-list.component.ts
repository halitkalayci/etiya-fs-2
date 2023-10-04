import { AfterContentInit, Component, OnChanges, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, AfterContentInit, OnChanges {
  //Angular-TS tarafında dependency injection nasıl yapılır?
  constructor(private httpClient: HttpClient) {}

  //angular hooks
  ngOnChanges() {
    console.log('ngOnChanges');
  }
  ngOnInit(): void {
    this.fetchPosts();
  }
  ngAfterContentInit(): void {
    throw new Error('Method not implemented.');
  }
  //

  fetchPosts() {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((response) => {
        console.log(response);
      });
  }
}
