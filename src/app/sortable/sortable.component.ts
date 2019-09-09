import { Component, ViewChild, ElementRef } from '@angular/core';
import { Sortable, DragOverContainerEvent } from '@shopify/draggable';
import { LogoService } from '../logo.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sortable',
  templateUrl: './sortable.component.html',
  styleUrls: ['./sortable.component.scss']
})
export class SortableComponent {
  sortable: Sortable;

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

  constructor(
    private logoService: LogoService,
    private sanitizer: DomSanitizer
  ) {}
}
