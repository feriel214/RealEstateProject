import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationEditComponent } from './installation-edit.component';

describe('InstallationEditComponent', () => {
  let component: InstallationEditComponent;
  let fixture: ComponentFixture<InstallationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
