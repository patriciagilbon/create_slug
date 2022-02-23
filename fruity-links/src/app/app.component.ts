import { Component } from '@angular/core';
import { Permalink } from './models/permalink';
import { PermalinkCreator } from './models/permalink-creator';
import { FruityLinkService } from './services/fruity-link.service';
import { NzMessageService } from 'ng-zorro-antd/message';


const VALID_URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

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
  regexError = false;
  
  constructor(private fruityLinkService: FruityLinkService, private message: NzMessageService) {
  }


  shortenUrl() {
    this.loading = true;
    if (this.isUrlEmpty()) {
      this.message.create('error', `URL cannot be empty!`);
      this.loading = false;
    } else {
      this.targetUrl = 'Http://'+ (this.targetUrl) + '.com'
      const creator: PermalinkCreator = new PermalinkCreator(this.domainId, this.targetUrl);
      this.fruityLinkService.shortenUrl(creator).subscribe((permalink: Permalink) => {
      this.permalink = permalink;
      this.loading = false;
      this.oldTargetUrl = this.targetUrl
      this.targetUrl = ""
      navigator.clipboard.writeText(permalink.shortenedUrl);
    });
    }
  }

  onUrlChanged(value: string) {
    this.regexError = value.trim().length > 0 && !value.trim().match(VALID_URL_REGEX);

  }

  isUrlEmpty() {
    return this.targetUrl?.trim() === '';
  }

  submitEnabled() {
    return !this.regexError && !this.isUrlEmpty();
  }

  reset(){
    this.permalink = undefined;
  }
}
