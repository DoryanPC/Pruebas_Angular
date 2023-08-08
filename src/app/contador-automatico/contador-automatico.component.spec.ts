import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorAutomaticoComponent } from './contador-automatico.component';

describe('ContadorAutomaticoComponent', () => {
  let component: ContadorAutomaticoComponent;
  let fixture: ComponentFixture<ContadorAutomaticoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContadorAutomaticoComponent]
    });
    fixture = TestBed.createComponent(ContadorAutomaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
