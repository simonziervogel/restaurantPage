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
    telephone: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(15)]),
    comment: new FormControl('' )
  })



  onSubmit(){
    if(this.contactform.valid){
      const {name, email, telephone, comment} = this.contactform.value
      alert('Ihre Eingabe:  Name = ' + name + '    E-Mail = ' + email + '    Telefonnummer = ' + telephone + '   Kommentar = ' + comment);
    }
    else{
      alert("Es liegt ein Fehler bzgl. Ihrer Eingabe vor. Bitte nochmal überprüfen.");
    }

  }

}
