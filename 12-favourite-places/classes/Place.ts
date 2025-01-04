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
    imageURL: string,
  ) {
    this.placeID = `${new Date().getTime().toString(16)}-${Math.random().toString(16)}`;
    this.title = title;
    this.address = address;
    this.location = location;
    this.imageURL = imageURL;
  }
}
