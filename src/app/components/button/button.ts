import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  template: `
    <a
      class="items-center justify-center transition-all duration-300 active:scale-95 font-bold cursor-pointer whitespace-nowrap
      {{ 'px-5 py-2.5 text-sm rounded-lg' }}
      {{ fullWidth() ? 'w-full flex' : 'inline-flex' }}
      {{
        !isBorder()
          ? 'bg-[#34A58A] text-white shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5 hover:bg-[#2d9179]'
          : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-800 hover:text-slate-900 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-700 dark:hover:text-white'
      }}"
    >
      {{ title() }}
    </a>
  `,
  styles: ``,
})
export class Button {
  title = input.required<string>();
  isBorder = input<boolean>(true);
  fullWidth = input<boolean>(false);
}
