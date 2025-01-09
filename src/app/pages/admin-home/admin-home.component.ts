import { Component, Injectable, OnInit } from '@angular/core';
import { PropertyOwnerService } from '../../services/property-owner.service';
import { NavbarComponent } from "../navbar/navbar.component";


@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.scss'
})
export class AdminHomeComponent implements OnInit {
  

  constructor(private service:PropertyOwnerService) {}

  ngOnInit(): void {
    this.service.getUsers().subscribe((propertyowners) => {
			 (response: any) => {
				localStorage.setItem('token', response.token);

				
			}
      console.log(propertyowners);
    });

  }

  
}
