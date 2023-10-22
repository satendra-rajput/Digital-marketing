import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawPageComponent } from './law-page.component';

describe('LawPageComponent', () => {
  let component: LawPageComponent;
  let fixture: ComponentFixture<LawPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LawPageComponent]
    });
    fixture = TestBed.createComponent(LawPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
