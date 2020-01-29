import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPressComponent } from './layout-press.component';

describe('LayoutPressComponent', () => {
  let component: LayoutPressComponent;
  let fixture: ComponentFixture<LayoutPressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutPressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutPressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
