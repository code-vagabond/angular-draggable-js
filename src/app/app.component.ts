import { Component, ViewChild, ElementRef } from '@angular/core';
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

  @ViewChild('dropzone', { static: false }) set initSortable(elem: ElementRef) {
    this.sortable = new Sortable([elem.nativeElement]);

    this.sortable.on('sortable:start', res => {
      console.log(res, 'hahahah');
    });
    this.sortable.on('drag:over:container', (res: DragOverContainerEvent) => {
      console.log(res, 'hihihihihi');
      console.log(res.data.originalSource.id);
    });
    this.sortable.on('drag:over', res => {
      console.log(res);
    });
  }

  @ViewChild('droppable', { static: false }) set initDroppable(
    elem: ElementRef
  ) {
    this.droppable = new Droppable([elem.nativeElement]);
    console.log(this.droppable);

    this.droppable.on('droppable:dropped', () => {
      console.log('res');
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
