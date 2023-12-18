import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgSenderComponent } from './msg-sender.component';

describe('MsgSenderComponent', () => {
  let component: MsgSenderComponent;
  let fixture: ComponentFixture<MsgSenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MsgSenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MsgSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
