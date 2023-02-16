import { BiEditAlt } from "react-icons/bi";
import { useState } from "react";
import GooglePlacesSelect from "./GooglePlacesAutocomplete";

function Location({ data, setLatLong }) {
  const [isEdit, setIsEdit] = useState(false);
  // const [place, setPlace] = useState(currentPlace);

  const toEdit = () => {
    setIsEdit((prevIsEdit) => !prevIsEdit);
  };

  // const currentPlace = place ?? data.name;

  return (
    <>
      {isEdit ? (
        <div className="w-full">
          <div className="bg-gray-600 p-2 m-2 rounded-lg">
            <GooglePlacesSelect
              toEdit={toEdit}
              setLatLong={setLatLong}
              // data={data}
              // setPlace={setPlace}
            />
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-between">
            <div className="bg-gray-600 p-2 m-2 rounded-lg flex-grow">
              {data.name}
            </div>
            <button className="bg-gray-600 p-2 m-2 rounded-lg" onClick={toEdit}>
              <BiEditAlt />
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Location;
