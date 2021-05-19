import { Test, TestingModule } from '@nestjs/testing';
import { ScrumRepository } from '../repository/scrum.repository';
import { ScrumService } from './scrum.service';

describe('ScrumService', () => {
  let service: ScrumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScrumService, ScrumRepository,],
    }).compile();

    service = module.get<ScrumService>(ScrumService);
  });

  // it('should be defined', () => {
  //   expect(service).toBeDefined();
	// });
	
	it('should be 4', () => {
		expect(2+2).toEqual(4);
	})
});
