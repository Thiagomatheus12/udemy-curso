import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { ListInvestmInvestmentsService } from './list-investm-investments.service';

describe('ListInvestmInvestmentsService', () => {
  let service: ListInvestmInvestmentsService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ListInvestmInvestmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
