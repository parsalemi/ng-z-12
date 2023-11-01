import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
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
  countCheck(){
    var a = 0;
    if(this.checkOptionsOne[0].checked === true){a++;}
    if(this.checkOptionsOne[1].checked === true){a++;}
    if(this.checkOptionsOne[2].checked === true){a++;}
    if(a ===3){return "All";}
    else{return a;}
  }
}

