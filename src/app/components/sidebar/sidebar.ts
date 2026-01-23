import { Component, inject, signal } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { SidebarItem } from '../sidebar-item/sidebar-item';
import { MenuModel } from '../../models/menu.model';
import { Button } from '../button/button';
import { RouterLink } from '@angular/router';
import { Icon } from '../icon/icon';
@Component({
  selector: 'app-sidebar',
  imports: [SidebarItem, Button, RouterLink, Icon],
  template: `
    <div
      class="flex flex-col h-screen shadow-md p-4 justify-between transition-all duration-300 dark:border-r-2 dark:border-[#292929]"
      [class.w-64]="isExpanded()"
      [class.w-20]="!isExpanded()"
    >
      <!-- above content -->
      <div class="flex flex-col gap-6">
        <div
          class="flex flex-row justify-between items-center"
          [class.justify-center]="!isExpanded()"
        >
          @if (isExpanded()) {
            <img src="trackmylife-logo.png" alt="logo" class="w-1/2" />
          }
          <div
            (click)="toggleSidebar()"
            class="hover:bg-[#E9EBEF] dark:hover:bg-[#292929] p-2 rounded-md shadow-sm cursor-pointer"
          >
            <app-icon
              name="arrow-left"
              size="16"
              class="transition-transform duration-300 block dark:text-[#717182] dark:hover:text-white"
              [class.rotate-180]="!isExpanded()"
            />
          </div>
        </div>

        <div class="flex flex-col gap-2">
          @for (item of menuData; track $index) {
            <app-sidebar-item
              [title]="item.title"
              [iconName]="item.icon"
              [route]="item.url"
              [isExpanded]="isExpanded()"
            />
          }
        </div>
      </div>

      <!-- below content -->
      <div class="flex flex-col gap-3">
        @if (isExpanded()) {
          <p class="text-[14px]">Welcome back</p>
          <p class="font-bold">Benny Septiawan Salim</p>
          <app-button title="Log out" [fullWidth]="true" routerLink="/" />

          <div
            (click)="themeService.toggleTheme()"
            class="flex flex-row gap-3 items-center p-2 rounded-md hover:bg-[#E9EBEF] dark:hover:bg-[#292929] cursor-pointer text-[#717182] dark:text-[#717182] hover:text-black dark:hover:text-white transition-colors"
          >
            @if (themeService.isDark()) {
              <app-icon name="sun" size="16" />
              <p class="text-[14px]">Light Mode</p>
            } @else {
              <app-icon name="moon" size="16" />
              <p class="text-[14px]">Dark Mode</p>
            }
          </div>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class Sidebar {
  themeService = inject(ThemeService);
  isExpanded = signal<boolean>(true);

  toggleSidebar() {
    this.isExpanded.update((val) => !val);
  }

  menuData: MenuModel[] = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
    },
    {
      title: 'Time',
      url: '/time',
      icon: 'clock',
    },
    {
      title: 'Task',
      url: '/task',
      icon: 'list',
    },
    {
      title: 'Money',
      url: '/money',
      icon: 'dollar-sign',
    },
    {
      title: 'Growth',
      url: '/growth',
      icon: 'trending-up',
    },
  ];
}
