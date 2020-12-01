import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathComponent } from './death.component';

describe('CasesComponent', () => {
  let component: DeathComponent;
  let fixture: ComponentFixture<DeathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
