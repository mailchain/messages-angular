import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesAngularComponent } from './messages-angular.component';

describe('MessagesAngularComponent', () => {
  let component: MessagesAngularComponent;
  let fixture: ComponentFixture<MessagesAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
