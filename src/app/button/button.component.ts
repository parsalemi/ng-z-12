import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  imports : [CommonModule,],
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
