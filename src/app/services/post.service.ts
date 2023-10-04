import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllPostModel } from '../models/post/GetAllPostModel';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<GetAllPostModel[]> {
    return this.httpClient.get<GetAllPostModel[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
  getById(id: number) {}
}