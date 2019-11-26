import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalClientComponent } from './signal-client.component';

describe('SignalClientComponent', () => {
  let component: SignalClientComponent;
  let fixture: ComponentFixture<SignalClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignalClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignalClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
