import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = '';
  password: string = '';

  onLogin() {
    if (this.email && this.password) {
      const userData = {
        email: this.email,
        password: this.password,
      };
      localStorage.setItem('user', JSON.stringify(userData));
      alert('Login Success');
    } else {
      alert('Plz enter email and pass');
    }

  }
}



