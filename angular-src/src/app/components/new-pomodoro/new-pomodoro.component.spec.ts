/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NewPomodoroComponent } from './new-pomodoro.component';

describe('NewPomodoroComponent', () => {
  let component: NewPomodoroComponent;
  let fixture: ComponentFixture<NewPomodoroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPomodoroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPomodoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
