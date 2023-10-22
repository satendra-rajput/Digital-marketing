import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageDefaultComponent } from './homepage-default.component';

describe('HomepageDefaultComponent', () => {
  let component: HomepageDefaultComponent;
  let fixture: ComponentFixture<HomepageDefaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageDefaultComponent]
    });
    fixture = TestBed.createComponent(HomepageDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
