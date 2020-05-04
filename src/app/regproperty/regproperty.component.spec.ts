import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegpropertyComponent } from './regproperty.component';

describe('RegpropertyComponent', () => {
  let component: RegpropertyComponent;
  let fixture: ComponentFixture<RegpropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegpropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
