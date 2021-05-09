export class Scrum {
	private props;

	constructor(scrumProps: ScrumProps) {
		this.props = scrumProps;
	}

	getWorkerId() {
		return this.props.workerId;
	}

	getStorySerial() {
		return this.props.storySerial;
	}

	getAveragePoint() {
		return this.props.point
	}

	getMinimumPoint() {
		return this.props.point
	}

	getMaximumPoint() {
		return this.props.point
	}
}

export interface ScrumProps {
	storySerial: number;
	workerId: string;
	averagePoint: number;
	minimumPoint: number;
	maximumPoint: number;
}