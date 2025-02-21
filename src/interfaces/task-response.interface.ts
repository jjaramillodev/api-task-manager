export interface TaskWithStateI {
	id: number
	title: string
	expiration_date: Date | null
	state: {
		title: string
		description: string
	}
}

export interface TaskResponseI {
	message: string
	task?: TaskWithStateI
	tasks?: TaskWithStateI[]
}
