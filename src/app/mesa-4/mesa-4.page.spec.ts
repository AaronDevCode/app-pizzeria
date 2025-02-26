import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mesa4Page } from './mesa-4.page';

describe('Mesa4Page', () => {
  let component: Mesa4Page;
  let fixture: ComponentFixture<Mesa4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Mesa4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
