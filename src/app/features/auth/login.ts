import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth.services';
import { Button } from '../../components/button/button';
import { TextButton } from '../../components/text-button/text-button';
import { Icon } from '../../components/icon/icon';
import { TextField } from '../../components/text-field/text-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, Button, TextButton, Icon, TextField],
  templateUrl: './login.html',
})
export class Login {
  authService = inject(AuthService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  isRegister = signal(false);

  constructor() {
    this.route.queryParams.subscribe((params) => {
      this.isRegister.set(params['mode'] === 'register');
    });
  }

  setRegister() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { mode: this.isRegister() ? 'login' : 'register' },
      queryParamsHandling: 'merge',
    });
  }

  submit() {
    this.authService.login();
    this.router.navigate(['/']);
  }
}
