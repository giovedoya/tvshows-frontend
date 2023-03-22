import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { show } = props;

  return (
<div className="flex justify-center flex-col items-center">
  <img className="rounded-lg shadow-lg h-80 w-80 object-cover" src={show.image} alt={show.title} />
  <h2 className="mt-2 text-lg font-medium text-center">
    <Link to={`/shows/${show._id}`} className="hover:text-gray-500">{show.title}</Link>
  </h2>
</div>




  );
}
