import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgListComponent } from './ng-list.component';

describe('NgListComponent', () => {
  let component: NgListComponent;
  let fixture: ComponentFixture<NgListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgListComponent]
    });
    fixture = TestBed.createComponent(NgListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
