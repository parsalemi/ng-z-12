import { NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports : [NgIf, NgForOf, NzButtonModule],
  standalone : true,
})

export class ButtonComponent {
  show : boolean  = false;
  add(){
      this.show = true;  
      this.click.push(this.click.length + 1);

  } 
  del(){
    this.click.pop();
  } 

  click : any[] = [];


}
