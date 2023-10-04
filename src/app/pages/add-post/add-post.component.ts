import { Component, OnInit } from '@angular/core';
import { GetAllUserModel } from 'src/app/models/user/getAllUserModel';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  users: GetAllUserModel[] = [];

  title: string = '';
  body: string = '';
  userId: number = 0;
  constructor(
    private userService: UserService,
    private postService: PostService
  ) {}
  ngOnInit(): void {
    this.fetchUsers();
  }
  fetchUsers() {
    this.userService.getAll().subscribe((response) => {
      this.users = response;
    });
  }

  submit() {
    let request = { title: this.title, body: this.body, userId: this.userId };
    console.log(request);
    this.postService
      .add(request)
      .subscribe((response) => console.log(response));
  }
}
