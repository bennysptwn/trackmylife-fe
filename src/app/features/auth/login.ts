import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
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
  isRegister = signal(false);

  setRegister() {
    this.isRegister.set(!this.isRegister());
  }

  submit() {
    console.log('submit');
  }
}
