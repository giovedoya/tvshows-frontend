import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import showService from "../services/showService";
import { Link } from "react-router-dom";

export default function Show() {
  const { showId } = useParams();
  const [show, setShow] = useState(null);
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const style = {
    width: "300px",
  };

  const getShow = async () => {
    try {
      const response = await showService.getShow(showId);
      setShow(response);
      setError(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getShow();
    // eslint-disable-next-line
  }, [showId]);

  const handleDelete = async (showId) => {
    try {
      const deletedShow = await showService.deleteShow(showId);
      setShow(deletedShow);
      navigate("/");
    } catch (error) {
      console.error(error);
    } finally {
      getShow();
    }
  };

  return (
<div class="mx-auto my-10 max-w-md">
  <h2 class="text-lg font-bold mb-2">TV Show details</h2>

  {show ? (
    <>
      <h3 class="text-xl font-semibold mb-2">{show.title}</h3>
      <p class="text-gray-600 mb-2">{show.creator}</p>
      <p class="text-gray-600 mb-2">{show.launched}</p>
      <p class="text-gray-600 mb-4">{show.genre}</p>
      <img class="mb-4 w-full rounded-md" src={show.image} alt={show.title} />
      <p class="text-gray-600 mb-4">{show.description}</p>
      <div>
        <button class="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md mr-2">
          <Link to={`/edit/${show._id}`}>Edit show</Link>
        </button>
        <button class="bg-red-500 text-white font-semibold py-2 px-4 rounded-md" type="button" onClick={() => handleDelete(show._id)}>
          Delete show
        </button>
      </div>
    </>
  ) : null}
  {error ? <p class="text-red-500">{error}</p> : null}
</div>

  );
}
