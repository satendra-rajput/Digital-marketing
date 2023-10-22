import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduactionPageComponent } from './eduaction-page.component';

describe('EduactionPageComponent', () => {
  let component: EduactionPageComponent;
  let fixture: ComponentFixture<EduactionPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EduactionPageComponent]
    });
    fixture = TestBed.createComponent(EduactionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
