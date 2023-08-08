import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentImageComponent } from './component-image.component';

describe('ComponentImageComponent', () => {
  let component: ComponentImageComponent;
  let fixture: ComponentFixture<ComponentImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentImageComponent]
    });
    fixture = TestBed.createComponent(ComponentImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
