import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentBuclesComponent } from './component-bucles.component';

describe('ComponentBuclesComponent', () => {
  let component: ComponentBuclesComponent;
  let fixture: ComponentFixture<ComponentBuclesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentBuclesComponent]
    });
    fixture = TestBed.createComponent(ComponentBuclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
