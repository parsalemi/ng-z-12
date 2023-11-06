import { Component } from '@angular/core';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss'],
  standalone:true,
  imports:[NzSkeletonModule,NzSwitchModule,FormsModule],
  host: {
    style: 'display: block; padding: 12px; border-radius: 12px; overflow: hidden; background: white;'
  }
})
export class SkeletonComponent {
  active:boolean = false;
}
