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
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
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
