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
  loading = false;
  empty = false;
  messageButton = 'Shorten'
  imageButton = 'copy'
  constructor(private fruityLinkService: FruityLinkService) {
  }


  shortenUrl() {
    this.loading = true;
    this.messageButton = 'Loading'
    this.imageButton = 'loading'
    if (this.targetUrl == ""){
      console.log('Variable!');
      this.empty = true;
      this.loading = false;
    }
    else{
      const creator: PermalinkCreator = new PermalinkCreator(this.domainId, this.targetUrl);
      this.fruityLinkService.shortenUrl(creator).subscribe((permalink: Permalink) => {
      this.permalink = permalink;
      this.loading = false;
      this.imageButton = 'copy';
      this.messageButton = 'Shorten'
      this.targetUrl = ""
      navigator.clipboard.writeText(permalink.shortenedUrl);
    });
    console.log('Here now!');
    }
  }
}
