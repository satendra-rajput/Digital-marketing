import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativePageComponent } from './creative-page.component';

describe('CreativePageComponent', () => {
  let component: CreativePageComponent;
  let fixture: ComponentFixture<CreativePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreativePageComponent]
    });
    fixture = TestBed.createComponent(CreativePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
