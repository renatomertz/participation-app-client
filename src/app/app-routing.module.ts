import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParticipationListComponent } from './participation/participation-list/participation-list.component';
import { ParticipationAddComponent } from './participation/participation-add/participation-add.component';
import { ParticipationEditComponent } from './participation/participation-edit/participation-edit.component';


const routes: Routes = [
  {
    path: 'participations',
    component: ParticipationListComponent
  },
  {
    path: 'participation',
    component: ParticipationAddComponent
  },
  {
    path: 'participation/:id',
    component: ParticipationEditComponent
  }, 
  {
    path: '',
    redirectTo: '/participations',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
