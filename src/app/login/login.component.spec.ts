import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginService } from '../service/login.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginServiceSpy: jasmine.SpyObj<LoginService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent,HttpClientTestingModule,RouterTestingModule ],
    providers: [{ provide: LoginService, useValue: loginServiceSpy }]
    })
    .compileComponents();
    loginServiceSpy = jasmine.createSpyObj('LoginService', ['onSubmit']);
    routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set errorMessage when handleLoginError is called', () => {
    component.handleLoginError();
    expect(component.errorMessage).toBe('Invalid username or password');
  });

  it('get user name',()=>{
    component.loginForm.controls['username'].setValue('Pramod');
    expect(component.username?.value).toBe('Pramod');
  });

  it('get user password',()=>{
   component.loginForm.controls['password'].setValue('happy!');
   expect(component.password?.value).toBe('happy!');
  });
 
  it('clear error',()=>{
    //Arrange
    component.errorMessage = 'Random Error',

    //Act
    component.clearError();

    //Assert
    expect(component.errorMessage).toBeNull();
  });

  it('should login successfully and set token in localStorage', async () => {
    // Arrange
    const mockResponse = { token: 'fake-token' };  // Mock response with a token
  
    // Mock localStorage setItem to check if it's called
    spyOn(localStorage, 'setItem');
  
    // Mock the router navigate method
    routerSpy.navigateByUrl.and.returnValue(Promise.resolve(true));
  
    // Mock the loginService.onSubmit() to return the mocked response
    loginServiceSpy.onSubmit.and.returnValue(of(mockResponse));  // Mock observable response
  
    // Set form values for testing
    component.loginForm.controls['username'].setValue('testuser');
    component.loginForm.controls['password'].setValue('testpassword');
  
    // Act
    component.onSubmit();  // Call the onSubmit method
  
    // Trigger change detection and wait for asynchronous operations
    fixture.detectChanges();
    await fixture.whenStable();  // Wait for async operations
  
    // Assert: Check if localStorage.setItem is called with the correct arguments
    expect(localStorage.setItem).toHaveBeenCalledWith('token', 'fake-token');
  
    // Assert: Check if router.navigateByUrl was called with the correct route
    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/Businesssearch');
  });
  
  
});
