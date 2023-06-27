import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdistanciasComponent } from './cdistancias.component';

describe('CdistanciasComponent', () => {
  let component: CdistanciasComponent;
  let fixture: ComponentFixture<CdistanciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdistanciasComponent]
    });
    fixture = TestBed.createComponent(CdistanciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
