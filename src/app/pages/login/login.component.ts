import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
	email = '';
	password = '';
	loginFailed = false;
	constructor(private http: HttpClient, private router: Router) { }

	login() {
		const loginData = {
			email: this.email,
			password: this.password
		};

		this.http.post('https://localhost:7108/api/PropertyOwners/login', loginData).subscribe({
			next: (res: any) => {
				
				localStorage.setItem('token', res.token);
				if(res.userType == "Admin")
				this.router.navigate(['admin-home']).then(() => {
					window.location.reload();
				});
				if(res.userType == "User")
					this.router.navigate(['user-home']).then(() => {
						window.location.reload();
					});
				
			},
			error: (err) => {
				this.loginFailed = !this.loginFailed
				console.error('Login failed', err);
			}
		});
	}
}

