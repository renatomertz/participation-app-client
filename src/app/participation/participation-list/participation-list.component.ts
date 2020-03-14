import { Component, OnInit } from '@angular/core';

import { ParticipationService } from '../service/participation.service'

@Component({
  selector: 'app-participation-list',
  templateUrl: './participation-list.component.html',
  styleUrls: ['./participation-list.component.css']
})
export class ParticipationListComponent implements OnInit {

  constructor(private participationService : ParticipationService) { }

  ngOnInit() {
  }

}
