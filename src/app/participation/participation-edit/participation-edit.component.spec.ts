import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationEditComponent } from './participation-edit.component';

describe('ParticipationEditComponent', () => {
  let component: ParticipationEditComponent;
  let fixture: ComponentFixture<ParticipationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
