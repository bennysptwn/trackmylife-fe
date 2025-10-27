import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [RouterLink],
  template: `
    <a
      class="bg-white hover:bg-[#E9EBEF] border border-[#E9EBEF] rounded-md p-1 hover:shadow-md flex flex-row text-[12px] justify-center"
      routerLink="/"
    >
      button works!
    </a>
  `,
  styles: ``,
})
export class Button {}
