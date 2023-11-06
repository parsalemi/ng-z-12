import { Component } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
@Component({
  selector: 'app-headermenu',
  standalone: true,
  imports: [NzMenuModule,RouterModule,NzIconModule],
  templateUrl: './headermenu.component.html',
  styleUrls: ['./headermenu.component.scss']
})
export class HeadermenuComponent {

}
