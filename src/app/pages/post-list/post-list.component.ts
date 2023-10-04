import { AfterContentInit, Component, OnChanges, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from 'src/app/services/post.service';
@Component({
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, AfterContentInit, OnChanges {
  //Angular-TS tarafında dependency injection nasıl yapılır?
  constructor(private postService: PostService) {}

  //angular hooks
  ngOnChanges() {
    console.log('ngOnChanges');
  }
  ngOnInit(): void {
    this.fetchPosts();
  }
  ngAfterContentInit(): void {}
  //
  //
  fetchPosts() {
    this.postService.getAll().subscribe((response) => {
      console.log(response);
    });
  }
}
