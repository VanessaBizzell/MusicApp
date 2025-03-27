import { Component, OnInit } from '@angular/core';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';

@Component({
  selector: 'app-logout',
  imports: [FormDialogComponent],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})

export class LogoutComponent implements OnInit {

  url: string = 'https://soundwave-lewe.onrender.com/logout';
  //url: string = 'http://localhost:3001/logout';

  async ngOnInit() {
    await fetch(this.url, {
      method: 'POST',
      credentials: 'include',
    })
    .catch(error => console.error(error))
  }

}
