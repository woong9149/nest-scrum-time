import { Injectable } from "@nestjs/common";
import { Scrum } from "../domain/scrum";
import { ScrumEntity } from "../entity/scrum.entity";
import { ScrumRepository } from "../repository/scrum.repository";
import { ScrumServiceCreateRequest, ScrumServiceFindAllRequest } from "./dto/scrum.service.dto";

@Injectable()
export class ScrumService {
	constructor(
		private readonly scrumRepository: ScrumRepository
	){}

	async findAll(request: ScrumServiceFindAllRequest): Promise<Scrum> {
		let storyPoint = await this.scrumRepository.findAll(result => result.storySerial === request);
		let calculatedStoryPoint = this.getCalculatedStoryPoint(storyPoint);
		return calculatedStoryPoint;
	};

	async create(request: ScrumServiceCreateRequest): Promise<Scrum> {
		let savedPoint = await this.scrumRepository.createOne(request);
		return;
	};

	async getCalculatedStoryPoint (request: ScrumEntity[]): Promise<Scrum> {
		let len = request.length;
		let total = 0;
		let minimumPoint = 0;
		let maximumPoint = 0;

		for(let i = 0; i < len; i++) {
			total += request[i].storyPoint;

			minimumPoint = minimumPoint === 0 
				? request[i].storyPoint
				: (minimumPoint > request[i].storyPoint 
						? request[i].storyPoint
						: minimumPoint);

			maximumPoint = maximumPoint < request[i].storyPoint 
				? request[i].storyPoint
				: maximumPoint ;
		}

		const averagePoint = Math.ceil(total / len);

		return new Scrum({
			storySerial: request[0].storySerial,
			workerId: request[0].workerId,
			averagePoint: averagePoint,
			minimumPoint: minimumPoint,
			maximumPoint: maximumPoint,
		});
	}

}
