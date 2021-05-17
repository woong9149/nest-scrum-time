import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Scrum } from "../domain/scrum";
import { ScrumEntity } from "../entity/scrum.entity";

@Injectable()
export class ScrumRepository {

	constructor(
		@InjectRepository(ScrumEntity)
		private readonly scrumEntityRepository: Repository<ScrumEntity>
	) {}

	async findAll(request): Promise<ScrumEntity[]> {
		let entities: ScrumEntity[] = await this.scrumEntityRepository.find(request);
		return entities;
	}

	async createOne(request):Promise<Scrum> {
		let entities: ScrumEntity = await this.scrumEntityRepository.save(request);

		return;
	}

}