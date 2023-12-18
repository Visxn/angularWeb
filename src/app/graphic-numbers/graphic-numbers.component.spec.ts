import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicNumbersComponent } from './graphic-numbers.component';

describe('GraphicNumbersComponent', () => {
  let component: GraphicNumbersComponent;
  let fixture: ComponentFixture<GraphicNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicNumbersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphicNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
