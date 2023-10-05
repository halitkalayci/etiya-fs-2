import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllPostModel } from '../models/post/getAllPostModel';

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
  getById(id: number): Observable<GetAllPostModel> {
    return this.httpClient.get<GetAllPostModel>(
      'https://jsonplaceholder.typicode.com/posts/' + id
    );
  }

  add(request: any) {
    return this.httpClient.post(
      'https://jsonplaceholder.typicode.com/posts',
      request
    );
  }
}
// 11:00
