import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CResistenciasComponent } from './c-resistencias.component';

describe('CResistenciasComponent', () => {
  let component: CResistenciasComponent;
  let fixture: ComponentFixture<CResistenciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CResistenciasComponent]
    });
    fixture = TestBed.createComponent(CResistenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
