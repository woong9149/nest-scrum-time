import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ScrumEntity {

	@PrimaryGeneratedColumn('increment')
	no: number;

	@Column()
	point: number;

	@Column()
	userId: string;

	@Column()
	authority: string;
}

