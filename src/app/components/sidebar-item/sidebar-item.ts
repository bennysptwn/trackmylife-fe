import { Component, computed, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-sidebar-item',
  imports: [RouterLink, Icon],
  template: `
    <a
      class="p-3 text-[#121212] {{
        selected() ? 'bg-[#E9EBEF] dark:bg-[#292929]' : ''
      }} hover:bg-[#E9EBEF] dark:hover:bg-[#292929] text-[#717182] dark:text-[#717182] hover:text-black dark:hover:text-white rounded-xl hover:shadow-sm flex flex-row gap-3 items-center"
      [class.justify-center]="!isExpanded()"
      [routerLink]="route()"
    >
      <app-icon [name]="iconName()" size="16" />
      @if (isExpanded()) {
        <div
          class="whitespace-nowrap overflow-hidden transition-all duration-300"
        >
          {{ title() }}
        </div>
      }
    </a>
  `,
  styles: ``,
})
export class SidebarItem {
  title = input.required<string>();
  iconName = input.required<string>();
  isExpanded = input<boolean>(true);
  currRouter = inject(Router);
  route = input.required<string>();

  selected = computed(() => this.route() === this.currRouter.url);
}
