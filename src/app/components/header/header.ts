import { Component, inject } from '@angular/core';
import { Button } from '../button/button';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [Button],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  themeService = inject(ThemeService);
}
