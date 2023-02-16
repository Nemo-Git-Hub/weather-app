import { useState, useEffect } from "react";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";

const GooglePlacesSelect = ({ toEditLatLong }) => {
  const [place, setPlace] = useState(null);

  useEffect(() => {
    if (place) {
      geocodeByAddress(place.value.description)
        .then((results) => getLatLng(results[0]))

        .then(({ lat, lng }) => {
          toEditLatLong(lat, lng);
        });
    }
  }, [place]);

  return (
    <div className="bg-gray-600 p-2 m-2 rounded-lg">
      <GooglePlacesAutocomplete
        apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}
        selectProps={{
          value: place,
          onChange: setPlace,
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
  );
};

export default GooglePlacesSelect;
