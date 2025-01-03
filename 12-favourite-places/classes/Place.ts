export default class Place {
	placeID: string;
	title: string;
	address: string;
	location: {
		lat: number;
		lng: number;
	};
	imageURL: string;

	constructor(
		title: string,
		address: string,
		location: { lat: number; lng: number },
		imageURL: string
	) {
		this.placeID = new Date().toString() + Math.random().toString();
		this.title = title;
		this.address = address;
		this.location = location;
		this.imageURL = imageURL;
	}
}
