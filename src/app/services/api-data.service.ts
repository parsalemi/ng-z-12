import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  private path = 'https://jsonplaceholder.typicode.com/posts';
  private httpClient = inject(HttpClient);

  getApi() {
    return this.httpClient.get(this.path);
  }

  insertApi(data: any) {
    return this.httpClient.post(this.path, data);
  }

  deleteApi() {
    return this.httpClient.delete<DeleteResponse>(this.path)
  }

}

interface DeleteResponse {
  id: string;
  title: string;
  body: string;
}
