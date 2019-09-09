import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SortableComponent } from './sortable/sortable.component';
import { SortableMultipleDropzonesComponent } from './sortable-multiple-dropzones/sortable-multiple-dropzones.component';

@NgModule({
  declarations: [AppComponent, SortableComponent, SortableMultipleDropzonesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
