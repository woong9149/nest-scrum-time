import { Injectable } from "@nestjs/common";
import { Scrum } from "../domain/scrum";
import { ScrumRepository } from "../repository/scrum.repository";

@Injectable()
export class ScrumService {
	constructor(
		private readonly scrumRepository: ScrumRepository
	){}

	async findAll(): Promise<Scrum> {
		let storyPoint = await this.scrumRepository.findAll();
		return storyPoint;
	}
}



