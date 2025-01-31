import { Injectable } from '@angular/core';
import { PropertyOwner } from '../model/property-owner';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertyOwnerService {
private URL = 'https://localhost:7108/api/PropertyOwners'
  
  constructor(private httpClient: HttpClient) { }




  
    getUsers(): Observable<PropertyOwner[]> {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
      
      return this.httpClient.get(this.URL,{headers}).pipe(map((response: any) => response));
  };

}