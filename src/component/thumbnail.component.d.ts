import { OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
export interface ThumbnailOptions {
    getAccessToken?: (onGetAccessToken: (token: string, expire: number) => void) => void;
    documentId: string;
    width?: 100 | 200 | 400;
    height?: 100 | 200 | 400;
    defaultImageSrc?: string;
}
export declare class ThumbnailComponent implements OnChanges {
    private http;
    private sanitizer;
    thumbnailOptions: ThumbnailOptions;
    imageSrc: SafeUrl;
    private token;
    private expire;
    constructor(http: HttpClient, sanitizer: DomSanitizer);
    ngOnChanges(): void;
    private getThumbnail(documentId);
    private setAccessToken(accessToken, expiryTime);
    private toBase64(data);
    private setImageSrc(src?);
}
