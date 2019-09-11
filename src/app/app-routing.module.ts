import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SortableComponent } from './sortable/sortable.component';
import { SortableMultipleDropzonesComponent } from './sortable-multiple-dropzones/sortable-multiple-dropzones.component';
import { SortableMultipleContainersComponent } from './sortable-multiple-containers/sortable-multiple-containers.component';

const routes: Routes = [
  {
    path: 'sortable',
    component: SortableComponent
  },
  {
    path: 'sortable-multiple-dropzones',
    component: SortableMultipleDropzonesComponent
  },
  {
    path: 'sortable-multiple-containers',
    component: SortableMultipleContainersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
