import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  controllerUrl: string = environment.BASE_API_URL + 'products';
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get(this.controllerUrl);
  }
  getById(id: number) {
    return this.httpClient.get(this.controllerUrl + '/' + id);
  }
  add() {}
}
