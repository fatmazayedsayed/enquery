import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  features = [
    {
      icon: 'fa-envelope',
      title: 'Easy Enquiry Submission',
      description: 'Submit your enquiries quickly and easily through our intuitive form interface.'
    },
    {
      icon: 'fa-list',
      title: 'Track Enquiries',
      description: 'Monitor the status of all your submitted enquiries in real-time.'
    },
    {
      icon: 'fa-tag',
      title: 'Organized Categories',
      description: 'Enquiries are organized by categories for better management and filtering.'
    },
    {
      icon: 'fa-check-circle',
      title: 'Status Updates',
      description: 'Get instant notifications about the status updates of your enquiries.'
    }
  ];

  stats = [
    { number: '1000+', label: 'Enquiries Resolved' },
    { number: '500+', label: 'Active Users' },
    { number: '50+', label: 'Categories' },
    { number: '99%', label: 'Satisfaction Rate' }
  ];
}
