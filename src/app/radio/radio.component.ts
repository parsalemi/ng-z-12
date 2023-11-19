import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  imports: [FormsModule, NzRadioModule],
  standalone: true
})
export class RadioComponent {
  radioValue = '1';
  options = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' }
  ];

  radioValue2 = '';
}
