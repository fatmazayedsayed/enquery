import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './navbar.html',
    styleUrl: './navbar.css'
})
export class Navbar {
    isMenuOpen = signal(false);
    isAuthenticated = signal(false);
    userName = signal('');

    toggleMenu() {
        this.isMenuOpen.update(value => !value);
    }

    login() {
        // Navigate to login or open login modal
        console.log('Redirect to login');
    }

    logout() {
        this.isAuthenticated.set(false);
        this.userName.set('');
        console.log('User logged out');
    }

    register() {
        // Navigate to register or open registration modal
        console.log('Redirect to register');
    }
}
