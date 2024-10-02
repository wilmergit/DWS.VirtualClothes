import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyClothingPage } from './my-clothing.page';

describe('MyClothingPage', () => {
  let component: MyClothingPage;
  let fixture: ComponentFixture<MyClothingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyClothingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
