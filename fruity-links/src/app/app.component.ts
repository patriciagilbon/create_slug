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
  oldTargetUrl = '';
  domainId = '62139cf690828ef7c0f926f7';
  permalink: Permalink | undefined;
  loading = false;
  empty = false;
  messageButton = 'Shorten'
  imageButton = 'copy'
  url_shorten = 0;
  constructor(private fruityLinkService: FruityLinkService) {
  }


  shortenUrl() {
    this.loading = true;
    this.messageButton = 'Loading'
    this.imageButton = 'loading'
    if (this.targetUrl == ""){
      this.empty = true;
      this.loading = false;
      this.url_shorten = 0;
    }
    else{
      this.targetUrl = 'Http://'+ (this.targetUrl) + '.com'
      const creator: PermalinkCreator = new PermalinkCreator(this.domainId, this.targetUrl);
      this.fruityLinkService.shortenUrl(creator).subscribe((permalink: Permalink) => {
      this.permalink = permalink;
      this.loading = false;
      this.empty = false;
      this.imageButton = 'copy';
      this.messageButton = 'Shorten'
      this.oldTargetUrl = this.targetUrl
      this.targetUrl = ""
      navigator.clipboard.writeText(permalink.shortenedUrl);
      this.url_shorten = this.url_shorten + 1
    });
    }
  }

  warningButton(){
    this.empty = false;
    this.url_shorten = 0;
  }

  reset(){
    this.permalink = undefined;
    this.url_shorten = 0;
  }
}
