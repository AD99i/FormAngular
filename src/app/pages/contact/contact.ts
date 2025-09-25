import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {emailValidator} from '../../validators/email';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required,Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email,emailValidator()]),
    message: new FormControl('', [Validators.required,Validators.minLength(15)]),
  })

  onSubmit() {
    if(this.contactForm.valid){
    console.log(this.contactForm.value);
  }else {
      console.error(this.contactForm.errors)
    }
  }

}
