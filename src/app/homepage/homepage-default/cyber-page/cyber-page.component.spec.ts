import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyberPageComponent } from './cyber-page.component';

describe('CyberPageComponent', () => {
  let component: CyberPageComponent;
  let fixture: ComponentFixture<CyberPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CyberPageComponent]
    });
    fixture = TestBed.createComponent(CyberPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
