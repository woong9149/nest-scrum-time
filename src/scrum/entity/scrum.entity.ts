import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ScrumEntity extends BaseEntity{

	@PrimaryGeneratedColumn('increment')
	no: number;

	@Column()
	storyPoint: number;

	@Column()
	userId: string;

	@Column()
	storySerial: number;

	@Column()
	workerId: string;

	@Column()
	authority: string;
}

