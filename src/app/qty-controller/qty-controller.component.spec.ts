import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QtyControllerComponent } from './qty-controller.component';

describe('QtyControllerComponent', () => {
  let component: QtyControllerComponent;
  let fixture: ComponentFixture<QtyControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QtyControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QtyControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
