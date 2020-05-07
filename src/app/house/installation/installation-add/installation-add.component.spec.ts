import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallationAddComponent } from './installation-add.component';

describe('InstallationAddComponent', () => {
  let component: InstallationAddComponent;
  let fixture: ComponentFixture<InstallationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
