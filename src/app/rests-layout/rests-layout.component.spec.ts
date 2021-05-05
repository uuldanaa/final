import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestsLayoutComponent } from './rests-layout.component';

describe('RestsLayoutComponent', () => {
  let component: RestsLayoutComponent;
  let fixture: ComponentFixture<RestsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
