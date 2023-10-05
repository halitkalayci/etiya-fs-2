import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAllPostModel } from 'src/app/models/post/getAllPostModel';
import { PostService } from 'src/app/services/post.service';

@Component({
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],
})
export class PostDetailComponent implements OnInit {
  postId!: number;
  post!: GetAllPostModel;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {}
  ngOnInit(): void {
    this.getIdFromRoute(); // async
  }

  getIdFromRoute() {
    // this.activatedRoute.queryParams.subscribe((params) => {
    //   if (!params['id'] || params['id'] <= 0) {
    //     this.router.navigateByUrl('/posts');
    //     return;
    //   }
    //   this.postId = params['id'];
    //   this.getDetailsFromAPI();
    // });
    this.activatedRoute.params.subscribe((params) => {
      this.postId = params['id'];
      this.getDetailsFromAPI();
    });
  }

  getDetailsFromAPI() {
    this.postService.getById(this.postId).subscribe((response) => {
      this.post = response;
    });
  }
}
