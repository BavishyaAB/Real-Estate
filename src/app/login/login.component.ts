import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, Form } from '@angular/forms';
import { SigninserviceService } from '../signinservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private formbuilder: FormBuilder, private signinService: SigninserviceService) { }
  signinForm: FormGroup;
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.signinForm = this.formbuilder.group({
      phno: ['', Validators.required],
      passwd: ['', Validators.required]
    });
  }
  signin() {

    this.signinService.validate(this.signinForm.value).subscribe((response: any) => {
      if (response.success) {
        localStorage.setItem('user', JSON.stringify(response.data))
          this.router.navigate(['/user-home'])
      } else {
        alert(response.message)
      }
    })
  }
}