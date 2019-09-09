import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortableMultipleDropzonesComponent } from './sortable-multiple-dropzones.component';

describe('SortableMultipleDropzonesComponent', () => {
  let component: SortableMultipleDropzonesComponent;
  let fixture: ComponentFixture<SortableMultipleDropzonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortableMultipleDropzonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortableMultipleDropzonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
