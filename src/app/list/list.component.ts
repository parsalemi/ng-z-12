import { ApiDataService, } from './../services/api-data.service';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { Component } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Teamdata } from '../teamdata';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [NzListModule, NzSwitchModule, AsyncPipe, NzButtonModule, FormsModule]
})
export class ListComponent {
  loading = false;
  employee = new Teamdata();
  data: any;

  constructor(private qwe: ApiDataService) {
  }

  ngOnInit(): void {
    this.qwe.getApi().subscribe(t => {
      this.data = t
    });
    this.getemployeesdata();
    // fetch('https://jsonplaceholder.typicode.com/posts').then(a => a.json()).then(b => {
    //   this.data = b;
    // });

  }

  getemployeesdata() {
    this.qwe.getApi().subscribe(a => {
      this.data = a;
    });
  }

  insertData() {
    this.qwe.insertApi(this.data).subscribe(res => {
      this.getemployeesdata();
    });
  }

  alert() {
    alert("Data added");
  }

  // deleteData(){
  //   this.qwe.deleteApi().subscribe(a => {this.data = this.data.filter((i: any) => i.id !== a.id)})
  // }

}
