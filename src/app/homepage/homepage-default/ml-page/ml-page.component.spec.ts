import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlPageComponent } from './ml-page.component';

describe('MlPageComponent', () => {
  let component: MlPageComponent;
  let fixture: ComponentFixture<MlPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MlPageComponent]
    });
    fixture = TestBed.createComponent(MlPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
