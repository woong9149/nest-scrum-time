import { IsNumber, IsString } from "class-validator";
/**
 *  point
 * 	userId
 * 	storyId?
 */
export class ScrumControllerCreateRequest {

	@IsString()
	userId: string;

	@IsNumber()
	storyPoint: number;

	@IsNumber()
	storySerial: number;

	@IsString()
	workerId: string;

	@IsString()
	authority: string;
}


