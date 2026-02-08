import { Component, inject } from '@angular/core';
import { Button } from '../button/button';
import { ThemeService } from '../../services/theme.service';
import { Icon } from '../icon/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [Button, Icon, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  themeService = inject(ThemeService);
}
