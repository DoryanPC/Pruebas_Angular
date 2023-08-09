import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFormularioPlantillaComponent } from './component-formulario-plantilla.component';

describe('ComponentFormularioPlantillaComponent', () => {
  let component: ComponentFormularioPlantillaComponent;
  let fixture: ComponentFixture<ComponentFormularioPlantillaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentFormularioPlantillaComponent]
    });
    fixture = TestBed.createComponent(ComponentFormularioPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
