import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipationService {

  constructor(private httpClient: HttpClient) { }

  public getAllParticipants() : Observable<any> {
    return this.httpClient.get<any>('https://dtfenpcb13.execute-api.us-west-2.amazonaws.com/prod/notes');
  }
}
