import { TestBed } from '@angular/core/testing';

import { FornecedorService } from './fornecedor.service';

describe('FornecedorService', () => {
  let fornecedor: FornecedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    fornecedor = TestBed.inject(FornecedorService);
  });

  it('should be created', () => {
    expect(fornecedor).toBeTruthy();
  });
});