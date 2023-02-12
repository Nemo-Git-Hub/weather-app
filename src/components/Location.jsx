import { BiEditAlt } from "react-icons/bi";

function Location({ data }) {
  console.log(data);
  console.log(data?.name);
  return (
    <div className="flex justify-between">
      <div className="bg-gray-600 p-2 m-2 rounded-lg">{data.name}</div>
      <div className="bg-gray-600 p-2 m-2 rounded-lg">
        <BiEditAlt />
      </div>
    </div>
  );
}

export default Location;
