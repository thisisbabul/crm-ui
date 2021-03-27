import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StloginComponent } from './stlogin.component';

describe('StloginComponent', () => {
  let component: StloginComponent;
  let fixture: ComponentFixture<StloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
