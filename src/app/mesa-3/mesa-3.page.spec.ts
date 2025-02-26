import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mesa3Page } from './mesa-3.page';

describe('Mesa3Page', () => {
  let component: Mesa3Page;
  let fixture: ComponentFixture<Mesa3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Mesa3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
