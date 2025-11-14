import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Button } from '../../components/button/button';

@Component({
  selector: 'app-landing',
  imports: [Header, Button],
  templateUrl: './landing.html',
  //   styleUrl: './app.css',
})
export class Landing {}
