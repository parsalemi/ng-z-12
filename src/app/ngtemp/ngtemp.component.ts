import { Component } from '@angular/core';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from "ng-zorro-antd/button";

@Component({
  selector: 'app-ngtemp',
  templateUrl: './ngtemp.component.html',
  styleUrls: ['./ngtemp.component.scss'],
  standalone: true,
  imports: [NgTemplateOutlet, NgIf, FormsModule, NzButtonModule]
})
export class NgtempComponent {
  selected: boolean = false;
  text = 'Content';

  sel() {
    if (this.selected == false) {
      return this.selected = true;
    } else {
      return this.selected = false;
    }
  }
}
