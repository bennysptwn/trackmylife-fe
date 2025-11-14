import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [RouterLink],
  template: `
    <a
      class="hover:bg-[#E9EBEF] {{
        isBorder() ? 'border border-[#E9EBEF]' : ''
      }}  rounded-md p-1 hover:shadow-md flex flex-row text-[{{
        isLargeBtn() ? '22px' : '12px'
      }}] justify-center"
      routerLink="/"
    >
      {{ title() }}
    </a>
  `,
  styles: ``,
})
export class Button {
  title = input.required<string>();
  isLargeBtn = input<boolean>(true);
  isBorder = input<boolean>(true);
}
