import { Component } from '@angular/core';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { FormsModule } from '@angular/forms';
import { NzInputNumberModule } from "ng-zorro-antd/input-number";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [NzTabsModule, FormsModule, NzInputNumberModule]
})
export class TabsComponent {
  tabs: Array<{ name: string; content: string; disabled: boolean }> = [];
  selectedIndex = 27;

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  log(args: any[]): void {
    console.log(args);
  }

  ngOnInit(): void {
    for (let i = 0; i < 30; i++) {
      this.tabs.push({
        name: `Tab ${ i }`,
        disabled: i === 28,
        content: `Content of tab ${ i }`
      });
    }
  }
}
