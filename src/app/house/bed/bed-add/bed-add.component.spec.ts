import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedAddComponent } from './bed-add.component';

describe('BedAddComponent', () => {
  let component: BedAddComponent;
  let fixture: ComponentFixture<BedAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
