import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCardComponent } from './our-card.component';

describe('OurCardComponent', () => {
  let component: OurCardComponent;
  let fixture: ComponentFixture<OurCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurCardComponent]
    });
    fixture = TestBed.createComponent(OurCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
