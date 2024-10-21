import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactform: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    telephone: new FormControl('', [Validators.required, Validators.min(10000000000), Validators.max(999999999999999)]),
    comment: new FormControl('' )
  })



  onSubmit(){
    this.contactform.markAllAsTouched();
    this.contactform.updateValueAndValidity();
    if(this.contactform.valid){
      const {name, email, telephone, comment} = this.contactform.value
      alert('Danke für die Nachricht!   Ihre Eingabe:  Name = ' + name + '    E-Mail = ' + email + '    Telefonnummer = ' + telephone + '   Kommentar = ' + comment);
    }
  }
}
