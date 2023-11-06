import { Component } from '@angular/core';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
  standalone: true,
  imports: [NzCollapseModule,NgForOf],
})
export class CollapseComponent {
  panels: PanelsModel[] = [
    {
      active: true,
      name: 'Email',
      description: 'parsalemi@outlook.com',
    },
    {
      active: false,
      name: 'Phone',
      description: '+989120748517',
    },
    {
      active: false,
      name: 'Address',
      description: 'asdasdasdasda',
    }
  ];
}

interface PanelsModel {
  active: boolean;
  name: string;
  description: string;
};
