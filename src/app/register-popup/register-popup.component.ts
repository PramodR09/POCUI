import { Component, ElementRef, ViewChild } from '@angular/core';
import { BusinessService } from '../service/business.service';
import { Router } from '@angular/router';
import { Modal } from 'bootstrap';  // Import Modal from Bootstrap

@Component({
  selector: 'app-register-popup',
  standalone: true,
  imports: [],
  templateUrl: './register-popup.component.html',
  styleUrl: './register-popup.component.css'
})
export class RegisterPopupComponent {
  @ViewChild('successModal') successModal!: ElementRef;
  @ViewChild('errorModal') errorModal!: ElementRef;
  cusRegisterForm: any;  // Your form control

  constructor(private businessService: BusinessService, private router: Router) {}

  registerCustomer() {
    this.businessService.registerCustomer(this.cusRegisterForm.value).subscribe({
      next: (response) => this.onRegisterSuccess(response),
      error: (error) => this.onRegisterError(error),
    });
  }

  private onRegisterSuccess(response: { data?: string }): void {
    if (response?.data === 'pass') {
      // Show the success modal
      this.showSuccessModal();
      this.cusRegisterForm.reset();
    } else {
      // Show the error modal if the registration fails
      this.showErrorModal();
    }
  }

  private onRegisterError(error: any): void {
    console.error("Error during registration:", error);
    const errorMessage = error?.message || "An unexpected error occurred. Please try again.";
    // Show the error modal
    this.showErrorModal();
    this.cusRegisterForm.reset();
  }

  private showSuccessModal(): void {
    const modal = new Modal(this.successModal.nativeElement);
    modal.show();
  }

  private showErrorModal(): void {
    const modal = new Modal(this.errorModal.nativeElement);
    modal.show();
  }

  private navigateToLogin() {
    this.router.navigateByUrl('/login');
  }
}
