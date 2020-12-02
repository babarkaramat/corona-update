import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmitChartComponent } from './admit-chart.component';

describe('AdmitChartComponent', () => {
  let component: AdmitChartComponent;
  let fixture: ComponentFixture<AdmitChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmitChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmitChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
