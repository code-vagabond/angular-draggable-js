import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SortableComponent } from './sortable/sortable.component';

const routes: Routes = [
  {
    path: 'sortable',
    component: SortableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
