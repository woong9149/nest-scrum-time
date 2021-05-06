import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ScrumService } from "../service/scrum.service";
import { ScrumControllerCreateRequest } from './dto/scrum.controller.dto';

@Controller('scrum')
export class ScrumController {
	constructor(
		private readonly scrumService: ScrumService
	){}

	@Get('/:id')
	getOne(@Param('id') movieId: string) {
		return `This will return one movie with the id: ${movieId}`;
	}

	@Post()
	async create(@Body() scrumData: ScrumControllerCreateRequest) {
		await this.scrumService.create(scrumData);
		return `This story point is ${scrumData}` ;
	}


}
