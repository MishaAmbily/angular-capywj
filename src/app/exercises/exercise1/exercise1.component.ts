import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {

  user =  {
    name: '',
    email: '',
    password: ''
  };
  
  regForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10), Validators.pattern('^(?=.*[\\W_]).*$')]]
    });
  }
      submitForm() {
        if (this.regForm.valid) {
          this.user.name = this.regForm.value.name;
          this.user.email = this.regForm.value.email;
          this.user.password = this.regForm.value.password;
          console.log(this.user);
        }
      }
    }
  








