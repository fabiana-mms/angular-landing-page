import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NgOptimizedImage } from '@angular/common';
import { ButtonPrimaryComponent } from '../button-primary/button-primary.component';
import { NewsletterFormComponent } from "../newsletter-form/newsletter-form.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage, ButtonPrimaryComponent, NewsletterFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
