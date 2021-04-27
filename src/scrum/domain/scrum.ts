export class Scrum {
	private props;

	constructor(scrumProps: ScrumProps) {
		this.props = scrumProps;
	}

	getPoint() {
		return this.props.point;
	}

	getUserId() {
		return this.props.userId;
	}

	getAuthority() {
		return this.props.authority;
	}
}

export interface ScrumProps {
	point: number;
	userId: string;
	authority: string;
}