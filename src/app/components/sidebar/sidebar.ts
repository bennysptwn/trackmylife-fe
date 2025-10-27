import { Component } from '@angular/core';
import { SidebarItem } from '../sidebar-item/sidebar-item';
import { MenuModel } from '../../models/menu.model';
import { Button } from '../button/button';
@Component({
  selector: 'app-sidebar',
  imports: [SidebarItem, Button],
  template: `
    <div class="flex flex-col h-screen shadow-md p-4 justify-between">
      <!-- above content -->
      <div class="flex flex-col gap-6">
        <div class="flex flex-row justify-between items-center">
          <img src="trackmylife-logo.png" alt="logo" class="w-1/2" />
          <div class="hover:bg-[#E9EBEF] p-2 rounded-md shadow-sm">
            <img src="arrow-left-icon.svg" alt="logo" class="w-4 h-4" />
          </div>
        </div>

        <div class="flex flex-col gap-2">
          @for (item of menuData; track $index) {
          <app-sidebar-item
            [selected]="false"
            title="{{ item.title }}"
            iconSrc="{{ item.icon }}"
          />
          }
        </div>
      </div>

      <!-- below content -->
      <div class="flex flex-col gap-3">
        <p class="text-[14px]">Welcome back</p>
        <p class="font-bold">Benny Septiawan Salim</p>
        <app-button />
      </div>
    </div>
  `,
  styles: ``,
})
export class Sidebar {
  menuData: MenuModel[] = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'home-icon.svg',
    },
    {
      title: 'Time',
      url: '/time',
      icon: 'clock-icon.svg',
    },
    {
      title: 'Task',
      url: '/task',
      icon: 'task-icon.svg',
    },
    {
      title: 'Money',
      url: '/money',
      icon: 'money-icon.svg',
    },
    {
      title: 'Growth',
      url: '/growth',
      icon: 'growth-icon.svg',
    },
  ];
}
