import { Component, inject } from '@angular/core';
import { Header } from '../../components/header/header';
import { Button } from '../../components/button/button';
import { sectionFeature } from './landing.data';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  imports: [Header, Button],
  templateUrl: './landing.html',
  //   styleUrl: './app.css',
})
export class Landing {
  sectionFeature = sectionFeature;
  sanitizer = inject(DomSanitizer);
}
