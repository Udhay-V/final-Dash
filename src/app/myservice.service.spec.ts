import { TestBed } from '@angular/core/testing';
import { AppserviceService } from './myservice.service';

describe('MyserviceService', () => {
  let service: AppserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
