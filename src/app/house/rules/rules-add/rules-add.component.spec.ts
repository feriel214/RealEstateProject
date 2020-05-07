import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesAddComponent } from './rules-add.component';

describe('RulesAddComponent', () => {
  let component: RulesAddComponent;
  let fixture: ComponentFixture<RulesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RulesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
