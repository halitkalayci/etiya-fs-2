import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { GetAllUserModel } from 'src/app/models/user/getAllUserModel';
import { PostService } from 'src/app/services/post.service';
import { ProductService } from 'src/app/services/product.service';
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
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {}
  ngOnInit(): void {
    this.productService.getAll().subscribe((response) => {});
    this.buildForm();
    this.fetchUsers();
  }

  buildForm() {
    this.addForm = this.formBuilder.group({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      body: new FormControl('', [
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(20),
      ]),
      userId: new FormControl(0, [Validators.min(1)]),
    });
  }

  fetchUsers() {
    this.userService.getAll().subscribe((response) => {
      this.users = response;
    });
  }

  hasAnyError(controlName: string) {
    return (
      this.addForm.controls[controlName].touched &&
      this.addForm.controls[controlName].errors != null
    );
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
