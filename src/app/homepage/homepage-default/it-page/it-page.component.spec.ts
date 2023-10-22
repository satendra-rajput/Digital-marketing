import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItPageComponent } from './it-page.component';

describe('ItPageComponent', () => {
  let component: ItPageComponent;
  let fixture: ComponentFixture<ItPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItPageComponent]
    });
    fixture = TestBed.createComponent(ItPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
