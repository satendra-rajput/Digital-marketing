import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanitiesPageComponent } from './humanities-page.component';

describe('HumanitiesPageComponent', () => {
  let component: HumanitiesPageComponent;
  let fixture: ComponentFixture<HumanitiesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HumanitiesPageComponent]
    });
    fixture = TestBed.createComponent(HumanitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
