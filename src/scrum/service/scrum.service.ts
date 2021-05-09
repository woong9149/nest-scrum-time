import { Injectable } from "@nestjs/common";
import { Scrum } from "../domain/scrum";
import { ScrumRepository } from "../repository/scrum.repository";
import { ScrumServiceCreateRequest, ScrumServiceFindAllRequest } from "./dto/scrum.service.dto";

@Injectable()
export class ScrumService {
	constructor(
		private readonly scrumRepository: ScrumRepository
	){}

	async findAll(request: ScrumServiceFindAllRequest): Promise<Scrum> {
		let storyPoint = await this.scrumRepository.findAll(result => result.storySerial === request);
		return storyPoint;
	};

	async create(request: ScrumServiceCreateRequest): Promise<Scrum> {
		let savedPoint = await this.scrumRepository.createOne(request);
		return;
	};

}
