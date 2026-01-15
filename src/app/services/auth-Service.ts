import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

export interface User {
  id: string;
  username: string;
  email: string;
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser = signal<User | null>(null);
  isAuthenticated = signal(false);

  constructor(private http: HttpClient) {
    this.loadStoredUser();
  }

  private loadStoredUser() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      this.currentUser.set(user);
      this.isAuthenticated.set(true);
    }
  }

  login(username: string, password: string): Observable<User> {
    // Mock login - replace with actual API call
    if (username && password) {
      const user: User = {
        id: Math.random().toString(36).substr(2, 9),
        username: username,
        email: `${username}@example.com`,
        token: 'mock-jwt-token-' + Math.random()
      };
      
      localStorage.setItem('user', JSON.stringify(user));
      this.currentUser.set(user);
      this.isAuthenticated.set(true);
      
      return of(user);
    }
    return of(null as any);
  }

  logout(): void {
    localStorage.removeItem('user');
    this.currentUser.set(null);
    this.isAuthenticated.set(false);
  }

  getToken(): string | null {
    return this.currentUser()?.token || null;
  }
}