import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  private path = '/api/teams';
  constructor(private abc : HttpClient) { }
  getApi(){
    return this.abc.get(this.path);
  }
  insertData(data:any){
    return this.abc.post(this.path,data);
  }

}
