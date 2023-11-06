import { Component } from '@angular/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import { NgIf , NgForOf} from '@angular/common';
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  imports: [NzSelectModule,FormsModule,NgIf,NgForOf],
  standalone:true
})
export class SelectComponent {
  optionList = [
    { label: 'Lucy', value: 'lucy', age: 20 },
    { label: 'Jack', value: 'jack', age: 22 }
  ];
  selectedValue = { label: 'Jack', value: 'jack', age: 22 };
  compareFn = (o1: any, o2: any): boolean => (o1 && o2 ? o1.value === o2.value : o1 === o2);
  select = "";
  show = true;
}
