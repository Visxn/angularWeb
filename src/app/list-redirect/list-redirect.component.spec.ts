import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRedirectComponent } from './list-redirect.component';

describe('ListRedirectComponent', () => {
  let component: ListRedirectComponent;
  let fixture: ComponentFixture<ListRedirectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRedirectComponent]
    });
    fixture = TestBed.createComponent(ListRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
