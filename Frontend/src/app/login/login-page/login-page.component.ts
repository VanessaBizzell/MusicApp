import { Component } from '@angular/core';
import { LoginFormInputComponent } from '../components/form-input/login-form-input.component';
import { LoginFormButtonComponent } from '../components/form-button/login-form-button.component';
import { FormDialogComponent } from '../../form-dialog/form-dialog.component';

import { client } from './../../client/client'

@Component({
  selector: 'app-login-page',
  imports: [LoginFormInputComponent, LoginFormButtonComponent, FormDialogComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  username: string = '';
  password: string = '';

  errors: Array<string> = []
  redirect: string = '';

  isDialogVisible: boolean = false

  setDialogVisibility($event: boolean) {
    this.isDialogVisible = $event
    this.errors = []
  }

  setUsername(username: string) {
    this.username = username;
  }

  setPassword(password: string) {
    this.password = password;
  }

  url: string = 'https://soundwave-lewe.onrender.com/login';
  //url: string = 'http://localhost:3001/login';

  async login(event: Event): Promise<Response> {

    event.preventDefault();

    return await fetch(this.url,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify({
          "username": this.username,
          "password": this.password
        })
      }
    )
    .then(response => response.json())
    .then(data => {
      
      this.errors = data.errors
      if(this.errors.length == 0) this.redirect = '/'
      this.isDialogVisible = true
      
      return data
  })
    .catch(error => console.error(error))
  }

}
