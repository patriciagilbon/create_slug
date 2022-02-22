import { PermalinkType } from "./permalink-type";

export interface Permalink {
    id: string;
    host: string;
    ownerId: string;
    slug: string;
    shortenedUrl: string;
    targetUrl: string;
    type: PermalinkType;
    createdDateTime: string;
    lastUpdateDateTime: string;
    activationDateTime: string;
    expiryDate: string;
    template: any;
    customTemplate: any;
}