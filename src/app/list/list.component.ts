import { ApiDataService } from './../services/api-data.service';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { Component, OnInit } from '@angular/core';
import { NzListModule } from 'ng-zorro-antd/list';
import { NgIf , NgForOf ,AsyncPipe} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Teamdata } from '../teamdata';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone:true,
  imports:[NzListModule,NzSwitchModule,NgIf,NgForOf,AsyncPipe,NzButtonModule,FormsModule]
})
export class ListComponent implements OnInit{
  loading = false;
  employee = new Teamdata();
  data:any;
  employees:any;
  
  constructor(private qwe : ApiDataService){
    //  http.get('/api/teams').subscribe(e => {this.data = e.name})
  }
  ngOnInit(): void {
    this.qwe.getApi().subscribe(t => {this.data = t});
    this.getEmployeesdata();
  }
  
  dsdsds = [
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 2'
    },
    {
      title: 'Ant Design Title 3'
    },
    {
      title: 'Ant Design Title 4'
    }
  ];

  change(): void {
    
    this.loading = true;
    if (this.dsdsds.length > 0) {
      setTimeout(() => {
        this.data = [];
        this.loading = false;
      }, 1000);
    } else {
      setTimeout(() => {
        this.dsdsds = [
          {
            title: 'Ant Design Title 1'
          },
          {
            title: 'Ant Design Title 2'
          },
          {
            title: 'Ant Design Title 3'
          },
          {
            title: 'Ant Design Title 4'
          }
        ];
        this.loading = false;
      }, 1000);
    }
    alert("Data removed");
  }

  getEmployeesdata() {
    this.qwe.getApi().subscribe(a =>{
      this.employees = a;
    });
  }

  insertData(){
    this.qwe.insertData(this.employee).subscribe(res =>{
      this.getEmployeesdata();
    });

}
}
