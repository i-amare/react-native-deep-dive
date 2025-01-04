import Place from "@/classes/Place";
import { readData, storeData } from "@/utils/store";
import { createContext, useEffect, useState } from "react";

interface PlacesContextType {
	places: Place[];
	addPlace: (place: Place) => void;
	removePlace: (placeID: string) => void;
}

const defaultContext: PlacesContextType = {
	places: [],
	addPlace: () => {},
	removePlace: () => {},
};

export const PlacesContext = createContext(defaultContext);

export function PlacesContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [places, setPlaces] = useState<Place[]>([]);

	useEffect(() => {
		(async function loadPlaces() {
			const store = await readData("PlacesList");
			if (store?.length > 0) setPlaces(store);
		})();
	}, []);

	useEffect(() => {
		console.log("Places Context: ", places);
		if (places.length > 0)
			storeData({
				key: "PlacesList",
				value: places,
			});
	}, [places]);

	const addPlace = (place: Place) => {
		setPlaces((prev) => [...prev, place]);
	};

	const removePlace = (placeID: string) => {
		setPlaces((prev) => prev.filter((place) => place.placeID !== placeID));
	};

	return (
		<PlacesContext.Provider
			value={{
				places,
				addPlace,
				removePlace,
			}}
		>
			{children}
		</PlacesContext.Provider>
	);
}
