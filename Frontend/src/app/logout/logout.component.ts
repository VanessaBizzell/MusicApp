import { Component, OnInit } from '@angular/core';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';

@Component({
  selector: 'app-logout',
  imports: [FormDialogComponent],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})

export class LogoutComponent implements OnInit {
  
  //baseUrl: string = 'http://localhost:3001'
  baseUrl: string = 'https://soundwave-lewe.onrender.com'

  async ngOnInit() {
    await fetch(`${this.baseUrl}/logout`, {
      method: 'POST',
      credentials: 'include'
    })
    .catch(error => console.error(error))
  }

}
