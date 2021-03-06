import {
  Component,
  OnInit,
  ElementRef,
  ViewChildren,
  ViewChild,
  QueryList
} from '@angular/core';
import { LogoService } from '../logo.service';
import { DomSanitizer } from '@angular/platform-browser';
import {
  Sortable,
  Droppable,
  DragOverContainerEvent
} from '@shopify/draggable';

@Component({
  selector: 'app-sortable-multiple-dropzones',
  templateUrl: './sortable-multiple-dropzones.component.html',
  styleUrls: ['./sortable-multiple-dropzones.component.scss']
})
export class SortableMultipleDropzonesComponent {
  sortable: Sortable;
  droppable: Droppable;

  @ViewChild('dragzone', { static: false }) set initSortable(elem: ElementRef) {
    this.sortable = new Sortable([elem.nativeElement], {
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

  // https://github.com/Shopify/draggable/tree/master/src/Droppable
  @ViewChildren('dragzone, dropzone') set initDroppable(query: QueryList<any>) {
    const nativeElements = query
      .toArray()
      .map((elem: ElementRef) => elem.nativeElement);

    console.log(nativeElements);

    this.droppable = new Droppable(nativeElements, {
      draggable: '.item',
      dropzone: '.container'
    });
    console.log(this.droppable);

    this.droppable.on('droppable:dropped', () => {
      console.log('droppable:dropped');
    });

    this.droppable.on('droppable:returned', () =>
      console.log('droppable:returned')
    );
  }

  constructor(
    private logoService: LogoService,
    private sanitizer: DomSanitizer
  ) {}
}
