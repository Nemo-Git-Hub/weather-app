import { useState, useEffect } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";

// const getLatLng = (result: google.maps.GeocoderResult): Promise<any>;
// geocodeByAddress("Montevideo, Uruguay")
//   .then((results) => getLatLng(results[0]))
//   .then(({ lat, lng }) =>
//     console.log("Successfully got latitude and longitude", { lat, lng })
//   );

const GooglePlacesSelect = () => {
  const [value, setValue] = useState(null); // select place

  useEffect(() => {
    console.log(value);
    if (value) {
      geocodeByAddress(`${value}`);
    }
    // toEdit();
  }, [value]);

  return (
    <div className="w-full">
      <div className="bg-gray-600 p-2 m-2 rounded-lg flex-grow">
        <GooglePlacesAutocomplete
          // menuIsOpen={true}
          apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}
          selectProps={{
            value,
            onChange: setValue,
          }}
        />
      </div>
    </div>
  );
};

export default GooglePlacesSelect;
