import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  QueryList,
  ViewChildren
} from '@angular/core';
import { LogoService } from '../logo.service';
import { DomSanitizer } from '@angular/platform-browser';
import {
  Sortable,
  Droppable,
  DragOverContainerEvent
} from '@shopify/draggable';

@Component({
  selector: 'app-sortable-multiple-containers',
  templateUrl: './sortable-multiple-containers.component.html',
  styleUrls: ['./sortable-multiple-containers.component.scss']
})
export class SortableMultipleContainersComponent {
  sortable: Sortable;

  constructor(
    private logoService: LogoService,
    private sanitizer: DomSanitizer
  ) {}
  @ViewChildren('zone1, zone2') set initSortable(query: QueryList<any>) {
    const nativeElements = query
      .toArray()
      .map((elem: ElementRef) => elem.nativeElement);

    console.log(nativeElements);

    this.sortable = new Sortable(nativeElements, {
      draggable: '.item'
    });

    this.sortable.on('sortable:start', res => {
      console.log(res, 'sortable:start');
    });
    this.sortable.on('drag:over:container', (res: DragOverContainerEvent) => {
      console.log(res, 'drag:over:container');
      console.log(res.data.originalSource.id);
    });
    this.sortable.on('drag:over', res => {
      console.log(res, 'drag:over');
    });
  }
}
