export const formatStringNumber = (value: string): string => {
	return value.replace('.', ',').replace(/^0+/, '');
}