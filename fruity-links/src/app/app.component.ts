import { Component } from '@angular/core';
import { Permalink } from './models/permalink';
import { PermalinkCreator } from './models/permalink-creator';
import { FruityLinkService } from './services/fruity-link.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  targetUrl = '';
  domainId = '62139cf690828ef7c0f926f7';
  permalink: Permalink | undefined;

  constructor(private fruityLinkService: FruityLinkService) {
  }


  shortenUrl() {
    const creator: PermalinkCreator = new PermalinkCreator(this.domainId, this.targetUrl);
    this.fruityLinkService.shortenUrl(creator).subscribe((permalink: Permalink) => {
      this.permalink = permalink;
    });
    console.log('Here now!');
  }
}
