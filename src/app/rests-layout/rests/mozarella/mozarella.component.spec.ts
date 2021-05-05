import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MozarellaComponent } from './mozarella.component';

describe('MozarellaComponent', () => {
  let component: MozarellaComponent;
  let fixture: ComponentFixture<MozarellaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MozarellaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MozarellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
