import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BusinesssearchComponent } from './businesssearch.component';
import { BusinessService } from '../service/business.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BusinesssearchComponent', () => {
  let component: BusinesssearchComponent;
  let fixture: ComponentFixture<BusinesssearchComponent>;
  let businessServiceSpy: jasmine.SpyObj<BusinessService>;

  // beforeEach(async () => {
  //   // Create a mock service with a spy on getSubCategories
  //   businessServiceSpy = jasmine.createSpyObj('BusinessService', ['getSubCategories']);

  //   await TestBed.configureTestingModule({
  //     imports: [HttpClientTestingModule],
  //     declarations: [BusinesssearchComponent],
  //     providers: [{ provide: BusinessService, useValue: businessServiceSpy }]
  //   }).compileComponents();

  //   fixture = TestBed.createComponent(BusinesssearchComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should select category and call getSubCategories', () => {
  //   // Arrange
  //   const mockCategory = { categoryID: 1, categoryName: 'Electronics' };
  //   const mockSubCategories = [{ id: 101, name: 'Laptops' }, { id: 102, name: 'Phones' }];

  //   // Spy on getSubCategories and return mock data
  //   businessServiceSpy.getSubCategories.and.returnValue(of(mockSubCategories));

  //   // Act
  //   component.selectCategory(mockCategory);
  //   fixture.detectChanges();

  //   // Assert
  //   expect(component.selectedCategory).toBe('Electronics');
  //   expect(businessServiceSpy.getSubCategories).toHaveBeenCalledWith(1);
  // });

  // it('should update subCategories when getSubCategories is called', () => {
  //   // Arrange
  //   const mockSubCategories = [{ id: 101, name: 'Laptops' }, { id: 102, name: 'Phones' }];
  //   businessServiceSpy.getSubCategories.and.returnValue(of(mockSubCategories));

  //   // Act
  //   component.getSubCategories(1);
  //   fixture.detectChanges();

  //   // Assert
  //   expect(businessServiceSpy.getSubCategories).toHaveBeenCalledWith(1);
  //   expect(component.subCategories).toEqual(mockSubCategories);
  // });
});