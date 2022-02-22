import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Permalink } from '../models/permalink';
import { PermalinkCreator } from '../models/permalink-creator';

@Injectable({
  providedIn: 'root'
})
export class FruityLinkService {

  constructor() { }

  
  shortenUrl(plCreator: PermalinkCreator): Observable<Permalink> {
    return of({
      shortenedUrl: 'https://paty.link/MyShortUrl',
      slug: 'MyShortUrl',
      targetUrl: plCreator.targetUrl
    } as Permalink).pipe(delay(2000));
  }
}
