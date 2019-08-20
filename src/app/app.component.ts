import {
  Component,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
  AfterViewInit
} from '@angular/core';
import {
  Sortable,
  Droppable,
  DragOverContainerEvent
} from '@shopify/draggable';
import { LogoService } from './logo.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
