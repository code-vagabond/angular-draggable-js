import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortableComponent } from './sortable/sortable.component';
import { SortableMultipleDropzonesComponent } from './sortable-multiple-dropzones/sortable-multiple-dropzones.component';
import { SortableMultipleContainersComponent } from './sortable-multiple-containers/sortable-multiple-containers.component';

@NgModule({
  declarations: [AppComponent, SortableComponent, SortableMultipleDropzonesComponent, SortableMultipleContainersComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
