import { useState, useEffect } from "react";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";

const GooglePlacesSelect = ({ toEdit, setLatLong, setPlace, place }) => {
  // const [place, setPlace] = useState(currentPlace);

  // const currentPlace = place ?? data.name;
  // console.log(currentPlace);

  const upgradePlace = (newPlace) => {
    setPlace(newPlace);
    console.log(place);
    toEdit();
  };

  useEffect(() => {
    if (place) {
      geocodeByAddress(place.value.description)
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => setLatLong(lat, lng));
    }
  }, [place]);

  return (
    <div className="flex w-full">
      <div className="bg-gray-600 p-1 m-1 rounded-lg flex-grow">
        <GooglePlacesAutocomplete
          apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}
          selectProps={{
            value: place,
            onChange: upgradePlace(place),
            styles: {
              input: (provided) => ({
                ...provided,
                color: "#6B7280",
              }),
              option: (provided) => ({
                ...provided,
                color: "#6B7280",
              }),
              singleValue: (provided) => ({
                ...provided,
                color: "#6B7280",
              }),
            },
          }}
        />
      </div>
      <button className="bg-gray-600 p-1 m-1 rounded-lg" onClick={toEdit}>
        OK
      </button>
    </div>
  );
};

export default GooglePlacesSelect;
