import { Injectable, Inject, PLATFORM_ID} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
  ) {}

  scrollToElement(target: string | HTMLElement): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = typeof target === 'string' ? document.getElementById(target) : target;
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }
    }
  }
}
