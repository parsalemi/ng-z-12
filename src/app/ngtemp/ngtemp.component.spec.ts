import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtempComponent } from './ngtemp.component';

describe('NgtempComponent', () => {
  let component: NgtempComponent;
  let fixture: ComponentFixture<NgtempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgtempComponent]
    });
    fixture = TestBed.createComponent(NgtempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
