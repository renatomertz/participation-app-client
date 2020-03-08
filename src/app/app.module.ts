import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ParticipationAddComponent } from './participation/participation-add/participation-add.component';
import { ParticipationEditComponent } from './participation/participation-edit/participation-edit.component';
import { ParticipationListComponent } from './participation/participation-list/participation-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipationAddComponent,
    ParticipationEditComponent,
    ParticipationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
