import { Component, inject } from '@angular/core';
import { Header } from '../../components/header/header';
import { Button } from '../../components/button/button';
import {
  sectionFeature,
  sectionStats,
  sectionUserReview,
} from './landing.data';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [Header, Button, RouterLink],
  templateUrl: './landing.html',
  //   styleUrl: './app.css',
})
export class Landing {
  protected readonly feature = sectionFeature;
  protected readonly stats = sectionStats;
  protected readonly userReview = sectionUserReview;
  sanitizer = inject(DomSanitizer);
}
