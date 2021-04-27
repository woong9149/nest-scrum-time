import { IsNumber, IsString } from "class-validator";
/**
 *  point
 * 	userId
 * 	storyId
 */
export class ScrumControllerCreateRequest {
	@IsNumber()
	point: number;

	@IsString()
	userId: string;
}




