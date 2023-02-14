import { BiEditAlt } from "react-icons/bi";
import { useState } from "react";
import GooglePlacesSelect from "./GooglePlacesAutocomplete";

function Location({ data, setLat, setLong }) {
  const [isEdit, setIsEdit] = useState(false);

  function toEdit() {
    setIsEdit(!isEdit);
  }

  return (
    <>
      {isEdit ? (
        <div className="w-full">
          <div className="bg-gray-600 p-2 m-2 rounded-lg">
            <GooglePlacesSelect
              isEdit={isEdit}
              toEdit={toEdit}
              setLat={setLat}
              setLong={setLong}
            />
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-between">
            <div className="bg-gray-600 p-2 m-2 rounded-lg flex-grow">
              {data.name}
            </div>
            <button
              className="bg-gray-600 p-2 m-2 rounded-lg"
              onClick={() => {
                toEdit();
              }}
            >
              <BiEditAlt />
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Location;
