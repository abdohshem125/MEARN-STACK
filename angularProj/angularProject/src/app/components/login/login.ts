import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.email && this.password) {
      const userData = {
        email: this.email,
        password: this.password,
      };
      localStorage.setItem('user', JSON.stringify(userData));
      this.router.navigate(['/home']);
    } else {
      alert('Plz enter email and pass');
    }
  }
}
