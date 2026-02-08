import { Component, computed, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-sidebar-item',
  imports: [RouterLink, Icon],
  template: `
    <a
      class="p-2 lg:p-3 text-[#121212] {{
        selected()
          ? 'bg-transparent lg:bg-[#E9EBEF] lg:dark:bg-[#2a2a2a] text-[#717182] dark:text-[#717182]'
          : 'text-[#717182] dark:text-[#717182]'
      }} hover:bg-transparent lg:hover:bg-[#E9EBEF] lg:dark:hover:bg-[#292929] hover:text-black dark:hover:text-white rounded-xl lg:hover:shadow-sm flex flex-col lg:flex-row gap-1 lg:gap-3 items-center transition-colors duration-200"
      [class.justify-center]="!isExpanded()"
      [routerLink]="route()"
    >
      <div
        [class]="
          selected()
            ? 'bg-[#E9EBEF] dark:bg-[#292929] p-1.5 rounded-full lg:bg-transparent lg:p-0'
            : 'p-1.5 lg:p-0'
        "
      >
        <app-icon
          [name]="iconName()"
          size="20"
          [class]="!isExpanded() ? 'lg:w-5 lg:h-5' : ''"
        />
      </div>

      @if (isExpanded()) {
        <div
          class="whitespace-nowrap overflow-hidden transition-all duration-300 text-[10px] lg:text-base font-medium lg:font-normal"
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
