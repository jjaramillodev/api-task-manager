import { tzDate } from '@formkit/tempo'

export const transformStringToDate = (date?: string | null): Date | null => {
	if (!date) return null
	return tzDate(date, 'America/Lima')
}
