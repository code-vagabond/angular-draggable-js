import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortableMultipleContainersComponent } from './sortable-multiple-containers.component';

describe('SortableMultipleContainersComponent', () => {
  let component: SortableMultipleContainersComponent;
  let fixture: ComponentFixture<SortableMultipleContainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortableMultipleContainersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortableMultipleContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
