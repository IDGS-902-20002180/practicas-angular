import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CcinepolisComponent } from './ccinepolis.component';

describe('CcinepolisComponent', () => {
  let component: CcinepolisComponent;
  let fixture: ComponentFixture<CcinepolisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CcinepolisComponent]
    });
    fixture = TestBed.createComponent(CcinepolisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
