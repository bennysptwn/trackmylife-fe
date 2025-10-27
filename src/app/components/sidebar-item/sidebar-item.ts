import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar-item',
  imports: [RouterLink],
  template: `
    <a
      class=" p-3 text-[#121212] {{
        selected() ? 'bg-[#E9EBEF]' : ''
      }} hover:bg-[#E9EBEF] text-[#717182] hover:text-black rounded-xl hover:shadow-sm flex flex-row gap-3 items-center"
      routerLink="/"
    >
      <img src="{{ iconSrc() }}" class="w-4 h-4 " />
      <div>{{ title() }}</div>
    </a>
  `,
  styles: ``,
})
export class SidebarItem {
  selected = input.required<boolean>();
  title = input.required<string>();
  iconSrc = input.required<string>();
}
