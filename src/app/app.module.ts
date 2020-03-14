import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";

  import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ParticipationAddComponent } from './participation/participation-add/participation-add.component';
import { ParticipationEditComponent } from './participation/participation-edit/participation-edit.component';
import { ParticipationListComponent } from './participation/participation-list/participation-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ParticipationAddComponent,
    ParticipationEditComponent,
    ParticipationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
