export interface TaskI {
	id: number
	title: string
	expiration_date: Date | null
	state_id: number
	state?: {
		title: string
		description: string
	}
}

export interface TaskResponseI {
	message: string
	task?: TaskI
	tasks?: TaskI[]
}
