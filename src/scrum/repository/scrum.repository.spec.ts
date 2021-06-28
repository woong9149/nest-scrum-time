import { Test, TestingModule } from "@nestjs/testing";
import { Injectable } from "@nestjs/common";
import { getRepositoryToken, InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Scrum } from "../domain/scrum";
import { ScrumEntity } from "../entity/scrum.entity";
import { ScrumRepository } from "./scrum.repository";
import { plainToClass } from "class-transformer";

const testScrumEntity = plainToClass(ScrumEntity, {
  no: 1,
  storyPoint: 5,
  userId: 'userId',
  storySerial: 1,
	workerId: 'workerId',
	authority: 'nomal',
});

const mockRepository = {
  findAll: jest.fn(() => {
		return new ScrumEntity();
	}),
  createOne: jest.fn(() => {
		return testScrumEntity;
	}),
};

describe('scrumRepository', () => {
	let scrumRepository: ScrumRepository;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				ScrumRepository,
				{
					provide: getRepositoryToken(ScrumEntity),
					useValue: mockRepository,
				},
			],
		}).compile();
		scrumRepository = module.get<ScrumRepository>(ScrumRepository);
	});
	
	it('should be 4', () => {
		expect(2+2).toEqual(4);
	})
})