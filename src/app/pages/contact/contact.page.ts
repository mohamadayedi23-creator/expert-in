import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonButton, IonInput, IonItem, IonLabel, IonTextarea } from '@ionic/angular/standalone';
import { SectionWrapperComponent } from '../../shared/components/section-wrapper/section-wrapper.component';

@Component({
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, IonButton, IonInput, IonItem, IonLabel, IonTextarea, SectionWrapperComponent],
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.scss'
})
export class ContactPageComponent {
  submitted = false;

  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.submitted = false;
      return;
    }

    const { name, email, message } = this.form.getRawValue();
    const subject = encodeURIComponent(`EXPERT IN | Demande de contact - ${name}`);
    const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    this.submitted = true;
    window.location.href = `mailto:contact@expert-in.com?subject=${subject}&body=${body}`;
  }
}
