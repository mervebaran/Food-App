import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsHomeComponent } from './foods-home.component';

describe('FoodsHomeComponent', () => {
  let component: FoodsHomeComponent;
  let fixture: ComponentFixture<FoodsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
