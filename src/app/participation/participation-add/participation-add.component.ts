import { Component, OnInit } from '@angular/core';

import { Participation } from '../domain/participation'
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-participation-add',
  templateUrl: './participation-add.component.html',
  styleUrls: ['./participation-add.component.css']
})
export class ParticipationAddComponent implements OnInit {

  participationForm: FormGroup;
  name = '';
  last_name = '';
  participation: number = null;
  isLoadingResults = false;
  matcher = new ErrorStateMatcher();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.participationForm = this.formBuilder.group({
      'name' : [null, Validators.required],
      'last_name' : [null, Validators.required],
      'participation' : [null, Validators.required] 
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
  }

}
