import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustableComponent } from './adjustable.component';

describe('AdjustableComponent', () => {
  let component: AdjustableComponent;
  let fixture: ComponentFixture<AdjustableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjustableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
