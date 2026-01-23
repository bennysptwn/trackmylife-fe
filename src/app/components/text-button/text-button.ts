import { Component, input } from '@angular/core';

@Component({
  selector: 'app-text-button',
  template: `
    <a
      class="hover:font-medium"
      [class.text-emerald-500]="!color()"
      [style.color]="color()"
    >
      {{ title() }}
    </a>
  `,
  standalone: true,
})
export class TextButton {
  title = input.required<string>();
  color = input<string>();
}
