import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDark = signal<boolean>(false);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      // Check local storage or system preference
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.isDark.set(savedTheme === 'dark');
      } else {
        const systemDark = window.matchMedia(
          '(prefers-color-scheme: dark)',
        ).matches;
        this.isDark.set(systemDark);
      }

      // Effect to update DOM and storage
      effect(() => {
        const isDark = this.isDark();
        if (isDark) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
      });
    }
  }

  toggleTheme() {
    this.isDark.update((d) => !d);
  }
}
