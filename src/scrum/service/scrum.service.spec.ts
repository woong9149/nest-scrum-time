import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { ScrumController } from '../controller/scrum.controller';
import { Scrum } from '../domain/scrum';
import { ScrumEntity } from '../entity/scrum.entity';
import { ScrumRepository } from '../repository/scrum.repository';
import { ScrumService } from './scrum.service';

const mockRepository = () => ({
  findAll: jest.fn(),
  createOne: jest.fn(),
});

describe('ScrumService', () => {
  let scrumService: ScrumService;
  // let scrumRepository : ScrumRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ScrumService,
        { provide: getRepositoryToken(Scrum), useValue: mockRepository()}
      ],
      // providers: [ScrumService, ScrumRepository,],
      // imports: [
      //   TypeOrmModule.forRoot({
      //     type:'mysql',
      //     host: 'localhost',
      //     port: 3306,
      //     username: 'root',
      //     password: '111111',
      //     database: 'opentutorials',
      //     autoLoadEntities: true,
      //     synchronize: true,
      //   }),
      //   TypeOrmModule.forFeature([
      //     ScrumEntity,
      //   ])
      // ],
      // controllers: [ScrumController]
    }).compile();

    scrumService = module.get<ScrumService>(ScrumService);
    // scrumRepository = module.get<ScrumRepository>(ScrumRepository);
  });

  // it('should be defined', () => {
  //   expect(service).toBeDefined();
	// });
	
	it('should be 4', () => {
		expect(2+2).toEqual(4);
  });
  
});
