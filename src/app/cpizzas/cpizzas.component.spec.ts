import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpizzasComponent } from './cpizzas.component';

describe('CpizzasComponent', () => {
  let component: CpizzasComponent;
  let fixture: ComponentFixture<CpizzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CpizzasComponent]
    });
    fixture = TestBed.createComponent(CpizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
