import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarvillaComponent } from './barvilla.component';

describe('BarvillaComponent', () => {
  let component: BarvillaComponent;
  let fixture: ComponentFixture<BarvillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarvillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarvillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
