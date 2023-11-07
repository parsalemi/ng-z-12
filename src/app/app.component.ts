import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  ​
  
  constructor( 
    private router: Router,
    public titleService: Title,
    private route: ActivatedRoute,
    ){}

  theme : boolean = true;

  title = '';

  onBack():void{}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          const child: ActivatedRoute | null = this.route.firstChild;
          let title = child && child.snapshot.data['title'];
          if (title) {
            return title;
          }
        })
  ).subscribe((title) => {
    if (title) {
      this.titleService.setTitle(`${title}`);
    }
  });
}
}

