import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Scrum } from '../domain/scrum';
import { ScrumEntity } from '../entity/scrum.entity';
import { ScrumService } from "../service/scrum.service";
import { ScrumControllerCreateRequest } from './dto/scrum.controller.dto';

@Controller('scrum')
export class ScrumController {
	constructor(
		private readonly scrumService: ScrumService
	){}

	@Get()
	async getAll() {
		return 'success';
		// const result = await this.scrumService.findAll();
		// return result;
	}

	@Get('/:id')
	async getOne(@Param('id') storySerial: number) {
		const result = await this.scrumService.findOne(storySerial);
		return result;
	}

	@Post()
	async create(@Body() scrumData: ScrumControllerCreateRequest) {
		await this.scrumService.create(scrumData);
		return `This story point is ${scrumData}` ;
	}

}
