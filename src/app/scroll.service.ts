import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
  ) {}

  scrollToElement(target: string | HTMLElement, headerHeight: number = 0): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = typeof target === 'string' ? document.getElementById(target) : target;
      if (element) {
        const offsetTop = element.offsetTop - headerHeight;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
  }
}
