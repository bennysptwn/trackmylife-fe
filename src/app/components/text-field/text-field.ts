import { Component, input } from '@angular/core';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-text-field',
  template: `
    <div class="space-y-1.5">
      <label
        for="email"
        class="block text-xs font-medium text-neutral-300 ml-1"
        >{{ title() }}</label
      >
      <div class="relative group">
        <div
          class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500 group-focus-within:text-indigo-400 transition-colors"
        >
          <app-icon name="{{ icon() }}" />
        </div>
        <input
          type="email"
          id="email"
          placeholder="you@example.com"
          class="block w-full pl-10 pr-3 py-2.5 dark:bg-[#121212]  rounded-lg text-sm text-white placeholder-neutral-600 focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none transition-all duration-200"
        />
      </div>
    </div>
  `,
  styles: ``,
  imports: [Icon],
})
export class TextField {
  title = input.required<string>();
  icon = input.required<string>();
}
