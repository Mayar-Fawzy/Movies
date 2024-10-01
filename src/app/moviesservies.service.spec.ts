import { TestBed } from '@angular/core/testing';

import { MoviesserviesService } from './moviesservies.service';

describe('MoviesserviesService', () => {
  let service: MoviesserviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesserviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
