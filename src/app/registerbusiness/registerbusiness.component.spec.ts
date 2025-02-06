import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RegisterbusinessComponent } from "./registerbusiness.component";
import { BusinessService } from "../service/business.service";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from "rxjs";

describe('RegisterbusinessComponent', () => {
  let component: RegisterbusinessComponent;
  let fixture: ComponentFixture<RegisterbusinessComponent>;
  let businessServiceSpy: jasmine.SpyObj<BusinessService>;

  beforeEach(async () => {
    businessServiceSpy = jasmine.createSpyObj('BusinessService', ['getCategories']);

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RegisterbusinessComponent], // ✅ Import the standalone component here
      providers: [{ provide: BusinessService, useValue: businessServiceSpy }],
    }).compileComponents();
    fixture = TestBed.createComponent(RegisterbusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should fetch categories on init', () => {
    const mockCategories = [{ categoryID: 1, name: 'Vehicles' }, { categoryID: 2, name: 'Real Estate' }];
    businessServiceSpy.getCategories.and.returnValue(of(mockCategories));
    
    component.getCategories();

    expect(component.categories).toEqual(mockCategories);
    expect(component.registerForm.controls['CategoryID'].value).toBe(mockCategories[0].categoryID);
  });
});
