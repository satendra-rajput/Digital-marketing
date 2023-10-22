import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSciencePageComponent } from './data-science-page.component';

describe('DataSciencePageComponent', () => {
  let component: DataSciencePageComponent;
  let fixture: ComponentFixture<DataSciencePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataSciencePageComponent]
    });
    fixture = TestBed.createComponent(DataSciencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
