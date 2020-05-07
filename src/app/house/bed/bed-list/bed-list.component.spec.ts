import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedListComponent } from './bed-list.component';

describe('BedListComponent', () => {
  let component: BedListComponent;
  let fixture: ComponentFixture<BedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
