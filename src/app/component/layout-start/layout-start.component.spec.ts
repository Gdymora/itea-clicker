import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutStartComponent } from './layout-start.component';

describe('LayoutStartComponent', () => {
  let component: LayoutStartComponent;
  let fixture: ComponentFixture<LayoutStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
