import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

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

    constructor(private router: Router) { }

    toggleMenu() {
        this.isMenuOpen.update(value => !value);
    }

    login() {
        this.router.navigate(['/login']);
        this.isMenuOpen.set(false);
    }

    logout() {
        this.isAuthenticated.set(false);
        this.userName.set('');
        this.router.navigate(['/home']);
        this.isMenuOpen.set(false);
    }

    register() {
        this.router.navigate(['/login']);
        this.isMenuOpen.set(false);
    }
}

