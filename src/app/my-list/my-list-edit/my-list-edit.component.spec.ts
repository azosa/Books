import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListEditComponent } from './my-list-edit.component';

describe('MyListEditComponent', () => {
  let component: MyListEditComponent;
  let fixture: ComponentFixture<MyListEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyListEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
