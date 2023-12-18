import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomNumberChartComponent } from './random-number-chart.component';

describe('RandomNumberChartComponent', () => {
  let component: RandomNumberChartComponent;
  let fixture: ComponentFixture<RandomNumberChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomNumberChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomNumberChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
