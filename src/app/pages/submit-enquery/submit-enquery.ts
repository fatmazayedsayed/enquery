import { Component, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
 
interface Category {
  categoryId: number;
  categoryName: string;
  isActive: boolean;
}

interface Status {
  statusId: number;
  statusName: string;
  isActive: boolean;
}

interface EnquiryType {
  enquiryTypeId: number;
  enquiryTypeName: string;
  isActive: boolean;
}

@Component({
  selector: 'app-submit-enquery',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './submit-enquery.html',
  styleUrl: './submit-enquery.css',
})
export class SubmitEnquery implements OnInit {
  enquiryForm!: FormGroup;
  categories = signal<Category[]>([]);
  statuses = signal<Status[]>([]);
  enquiryTypes = signal<EnquiryType[]>([]);
  isLoading = signal(true);
  isSubmitting = signal(false);
  submitMessage = signal('');
  submitError = signal('');

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.initializeForm();
  }

  ngOnInit() {
    this.loadData();
  }

  initializeForm() {
    this.enquiryForm = this.fb.group({
      customerName: ['', [Validators.required, Validators.minLength(2)]],
      customerEmail: ['', [Validators.required, Validators.email]],
      customerPhone: ['', [Validators.required, Validators.pattern(/^[0-9\-\+\(\)\ ]+$/)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      categoryId: ['', Validators.required],
      statusId: ['', Validators.required],
      enquiryType: ['', Validators.required],
      feedback: [''],
      followUpDate: ['']
    });
  }

  loadData() {
    this.isLoading.set(true);
    Promise.all([
      this.loadCategories(),
      this.loadStatuses(),
      this.loadEnquiryTypes()
    ]).finally(() => {
      this.isLoading.set(false);
    });
  }

  loadCategories() {
    return new Promise<void>((resolve) => {
      this.http.get<Category[]>('/assets/data/categories.json').subscribe({
        next: (data) => {
          this.categories.set(data.filter(c => c.isActive));
          resolve();
        },
        error: () => {
          console.error('Error loading categories');
          resolve();
        }
      });
    });
  }

  loadStatuses() {
    return new Promise<void>((resolve) => {
      this.http.get<Status[]>('/assets/data/statuses.json').subscribe({
        next: (data) => {
          this.statuses.set(data.filter(s => s.isActive));
          resolve();
        },
        error: () => {
          console.error('Error loading statuses');
          resolve();
        }
      });
    });
  }

  loadEnquiryTypes() {
    return new Promise<void>((resolve) => {
      this.http.get<EnquiryType[]>('assets/data/enquiry-types.json').subscribe({
        next: (data) => {
          this.enquiryTypes.set(data.filter(t => t.isActive));
          resolve();
        },
        error: () => {
          console.error('Error loading enquiry types');
          resolve();
        }
      });
    });
  }

   onSubmit() {
    if (this.enquiryForm.invalid) {
      this.submitError.set('Please fill all required fields correctly.');
      return;
    }

    this.isSubmitting.set(true);
    this.submitError.set('');
    this.submitMessage.set('');

    const enquiryData = {
      ...this.enquiryForm.value,
      enquiryId: Math.floor(Math.random() * 10000),
      isConverted: false,
      enquiryDate: new Date().toISOString()
    };

    this.http.post('/api/enquiries', enquiryData).subscribe({
      next: (res) => {
        this.isSubmitting.set(false);
        this.submitMessage.set('Enquiry submitted successfully!');
        this.enquiryForm.reset();
        setTimeout(() => this.submitMessage.set(''), 3000);
      },
      error: (err) => {
        console.error('Save failed', err);
        this.isSubmitting.set(false);
        this.submitError.set('Failed to submit enquiry. Try again.');
      }
    });
  }
   resetForm() {
    this.enquiryForm.reset();
    this.submitError.set('');
    this.submitMessage.set('');
  }

  get customerName() {
    return this.enquiryForm.get('customerName');
  }

  get customerEmail() {
    return this.enquiryForm.get('customerEmail');
  }

  get customerPhone() {
    return this.enquiryForm.get('customerPhone');
  }

  get message() {
    return this.enquiryForm.get('message');
  }

  get categoryId() {
    return this.enquiryForm.get('categoryId');
  }

  get statusId() {
    return this.enquiryForm.get('statusId');
  }

  get enquiryType() {
    return this.enquiryForm.get('enquiryType');
  }
}
