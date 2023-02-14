import { useState, useEffect } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";

const GooglePlacesSelect = ({ toEdit, setLat, setLong }) => {
  const [value, setValue] = useState(null); // select place

  useEffect(() => {
    if (value) {
      geocodeByAddress(value.value.description)
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => (setLat(lat), setLong(lng)));
    }
  }, [value]);

  return (
    <div className="flex w-full">
      <div className="bg-gray-600 p-1 m-1 rounded-lg flex-grow">
        <GooglePlacesAutocomplete
          apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}
          selectProps={{
            value,
            onChange: setValue,
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
      <button
        className="bg-gray-600 p-1 m-1 rounded-lg"
        onClick={() => {
          toEdit();
        }}
      >
        OK
      </button>
    </div>
  );
};

export default GooglePlacesSelect;
