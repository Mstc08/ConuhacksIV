import { TestBed } from '@angular/core/testing';

import { ImageAnalyzerService } from './image-analyzer.service';

describe('ImageAnalyzerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageAnalyzerService = TestBed.get(ImageAnalyzerService);
    expect(service).toBeTruthy();
  });
});
