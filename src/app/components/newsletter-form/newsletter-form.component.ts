import { Component } from '@angular/core';
import { ButtonPrimaryComponent } from "../button-primary/button-primary.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-newsletter-form',
  standalone: true,
  imports: [
    ButtonPrimaryComponent,
    ReactiveFormsModule
  ],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss'
})
export class NewsletterFormComponent {
  newsletterForm!: FormGroup;

  constructor() {
    this.newsletterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  onSubmit() {
    console.log(this.newsletterForm.value);
  }
}
