import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  imports: [FormsModule, NzCheckboxModule],
  standalone: true
})
export class CheckboxComponent {

  allChecked = false;
  indeterminate = true;
  checkOptionsOne = [
    { label: '1', value: '1', checked: true },
    { label: '2', value: '2', checked: false },
    { label: '3', value: '3', checked: false }
  ]
  ;

  updateAllChecked(): void {
    this.indeterminate = false;
    if (this.allChecked) {
      this.checkOptionsOne = this.checkOptionsOne.map(item => ({
        ...item,
        checked: true
      }));
    } else {
      this.checkOptionsOne = this.checkOptionsOne.map(item => ({
        ...item,
        checked: false
      }));
    }
  }

  updateSingleChecked(): void {
    if (this.checkOptionsOne.every(item => !item.checked)) {
      this.allChecked = false;
      this.indeterminate = false;
    } else if (this.checkOptionsOne.every(item => item.checked)) {
      this.allChecked = true;
      this.indeterminate = false;
    } else {
      this.indeterminate = true;
    }
  }

  countCheck() {
    var a = 0;
    if (this.checkOptionsOne[0].checked === true) {
      a++;
    }
    if (this.checkOptionsOne[1].checked === true) {
      a++;
    }
    if (this.checkOptionsOne[2].checked === true) {
      a++;
    }
    if (a === 3) {
      return "All";
    } else {
      return a;
    }

  }

  showValue() {
    for (var i = 0; i <= 3; i++) {
      if (this.checkOptionsOne[i].checked == true) {
        return this.checkOptionsOne[i].label;
      }
    }
    return this.checkOptionsOne[i].value;
  }
}
