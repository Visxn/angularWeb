import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsScreenComponent } from './rxjs-screen.component';

describe('RxjsScreenComponent', () => {
  let component: RxjsScreenComponent;
  let fixture: ComponentFixture<RxjsScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsScreenComponent]
    });
    fixture = TestBed.createComponent(RxjsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
