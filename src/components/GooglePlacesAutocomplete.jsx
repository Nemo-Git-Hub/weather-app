import { useState, useEffect } from "react";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";

const GooglePlacesSelect = ({ toEdit, setLatLong }) => {
  const [place, setPlace] = useState(null);

  // const upgradePlace = (newPlace) => {
  //   setPlace(newPlace);
  //   console.log("newPlace: ", newPlace);
  //   console.log("place: ", place);
  //   // toEdit();
  // };

  useEffect(() => {
    if (place) {
      geocodeByAddress(place.value.description)
        .then((results) => getLatLng(results[0]))

        .then(({ lat, lng }) => {
          setLatLong(lat, lng);
          toEdit();
        });
    }
  }, [place]);

  return (
    <div className="flex w-full">
      <div className="bg-gray-600 p-1 m-1 rounded-lg flex-grow">
        <GooglePlacesAutocomplete
          apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}
          selectProps={{
            value: place,
            onChange: setPlace,
            // onChange: upgradePlace,
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
