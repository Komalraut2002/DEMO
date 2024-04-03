import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
  contactForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { 
    this.contactForm = fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required]]
    });
  }
  submitForm() {
    if (this.contactForm.valid) {
      
      console.log(this.contactForm.value);
      this.router.navigate(['../rocket']);
    } else {
      
    }
  }
  

  ngOnInit(): void {
  }

}