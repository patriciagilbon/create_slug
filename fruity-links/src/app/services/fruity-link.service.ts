import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Permalink } from '../models/permalink';
import { PermalinkCreator } from '../models/permalink-creator';

@Injectable({
  providedIn: 'root'
})
export class FruityLinkService {

  constructor(private httpClient: HttpClient) { }


  shortenUrl(plCreator: PermalinkCreator): Observable<Permalink> {
    return this.httpClient.post<Permalink>(`${environment.apiBaseUrl}/api/links`, plCreator, {
      headers: {
        'Authorization': `Bearer ${environment.apiAuthorizationSecret}`
      }
    });
  }
}
