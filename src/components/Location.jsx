import { BiEditAlt } from "react-icons/bi";
import { useState } from "react";
import GooglePlacesSelect from "./GooglePlacesAutocomplete";

function Location({ data, setLatLong }) {
  const [isEdit, setIsEdit] = useState(false);

  const toggleIsEdit = () => {
    setIsEdit((prevIsEdit) => !prevIsEdit);
  };

  const toEditLatLong = (lat, long) => {
    setLatLong(lat, long);
    toggleIsEdit();
  };

  return (
    <>
      {isEdit ? (
        <GooglePlacesSelect toEditLatLong={toEditLatLong} />
      ) : (
        <div className="flex justify-between">
          <div className="bg-gray-600 p-2 m-2 rounded-lg flex-grow">
            {data.name}
          </div>
          <button
            className="bg-gray-600 p-2 m-2 rounded-lg"
            onClick={toggleIsEdit}
          >
            <BiEditAlt />
          </button>
        </div>
      )}
    </>
  );
}

export default Location;
