import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscribeCardComponent } from './suscribe-card.component';

describe('SuscribeCardComponent', () => {
  let component: SuscribeCardComponent;
  let fixture: ComponentFixture<SuscribeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuscribeCardComponent]
    });
    fixture = TestBed.createComponent(SuscribeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
