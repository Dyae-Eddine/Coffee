import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CoffeeServiceService } from './coffee-service.service';

describe('CoffeeServiceService', () => {
  let service: CoffeeServiceService;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    }).compileComponents();
    
    service = TestBed.inject(CoffeeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
