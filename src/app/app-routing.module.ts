import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SortableComponent } from './sortable/sortable.component';
import { SortableMultipleDropzonesComponent } from './sortable-multiple-dropzones/sortable-multiple-dropzones.component';

const routes: Routes = [
  {
    path: 'sortable',
    component: SortableComponent
  },
  {
    path: 'sortable-multiple-dropzones',
    component: SortableMultipleDropzonesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
