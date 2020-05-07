import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultFrontComponent } from './default-front.component';

describe('DefaultFrontComponent', () => {
  let component: DefaultFrontComponent;
  let fixture: ComponentFixture<DefaultFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
