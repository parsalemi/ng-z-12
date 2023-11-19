import { Component } from '@angular/core';
import { NzModalModule, NzModalService, } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  standalone: true,
  imports: [NzModalModule, NzButtonModule]
})
export class ModalComponent {
  constructor(private modal: NzModalService) {
  }

  showConfirm(): void {
    this.modal.confirm({
      nzTitle: '<i>Do you Want to delete these items?</i>',
      nzContent: '<b>Sure?</b>',
    });
  }

  showDeleteConfirm(): void {
    this.modal.confirm({
      nzTitle: 'Are you sure delete this task?',
      nzContent: '<b style="color: red;">Some descriptions</b>',
      nzOkType: 'primary',
      nzOkText: 'Yes',
      nzCancelText: 'No',
      nzOkDanger: true,
    });
  }
}
