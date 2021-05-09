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

	async findAll(request): Promise<Scrum> {
		let entities: ScrumEntity[] = await this.scrumEntityRepository.find(request);
		let len = entities.length;
		let total = 0;
		for(let i = 0; i < len; i++) {
			total += entities[i].storyPoint;
		}
		const averagePoint = Math.ceil(total / len);
	
		return ;
	}

	async createOne(request):Promise<Scrum> {
		let entities: ScrumEntity = await this.scrumEntityRepository.save(request);

		return;
	}

}