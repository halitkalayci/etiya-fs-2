import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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

  addForm!: FormGroup;
  constructor(
    private userService: UserService,
    private postService: PostService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.buildForm();
    this.fetchUsers();
  }

  buildForm() {
    this.addForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
      userId: new FormControl(0, [Validators.min(1)]),
    });
  }

  fetchUsers() {
    this.userService.getAll().subscribe((response) => {
      this.users = response;
    });
  }

  hasValidationError(controlName: string, errorType: string) {
    if (
      this.addForm.controls[controlName].touched &&
      this.addForm.controls[controlName].errors != null &&
      this.addForm.controls[controlName].getError(errorType) != null
    ) {
      return true;
    }
    return false;
  }

  submit() {
    this.addForm.markAllAsTouched();
    if (this.addForm.invalid) {
      console.log('Validasyon hatası');
      return;
    }
    let request = this.addForm.value; // formdaki tüm alanları json türünde verir.
    console.log(request);
    this.postService
      .add(request)
      .subscribe((response) => console.log(response));
  }
}
