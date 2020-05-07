import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedEditComponent } from './bed-edit.component';

describe('BedEditComponent', () => {
  let component: BedEditComponent;
  let fixture: ComponentFixture<BedEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
