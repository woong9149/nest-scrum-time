export class Scrum {
	private props;

	constructor(scrumProps: ScrumProps) {
		this.props = scrumProps;
	}

	getStoryPoint() {
		return this.props.storyPoint;
	}

	getUserId() {
		return this.props.userId;
	}

	getWorkerId() {
		return this.props.workerId;
	}

	getStorySerial() {
		return this.props.storySerial;
	}

	getAuthority() {
		return this.props.authority;
	}

	getAveragePoint() {
		// return this.props.averagePoint;
		return this.props.point
	}
}

export interface ScrumProps {
	storyPoint: number;
	storySerial: number;
	userId: string;
	workerId: string;
	authority: string;
	averagePoint: number;
	minimumPoint: number;
	maximumPoint: number;
}