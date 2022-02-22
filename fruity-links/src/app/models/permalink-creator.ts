import { PermalinkType } from "./permalink-type";

export class PermalinkCreator {
    "domainId": string;    
    "targetUrl": string;
    "slug" = '';
    "type" = PermalinkType.SIMPLE;
    "expiryDate" = null;

        constructor(domainId: string, targetUrl: string) {
            this.domainId = domainId;
            this.targetUrl = targetUrl;
        }
}