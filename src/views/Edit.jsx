import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import showService from "../services/showService";

export default function Edit() {
  const { showId } = useParams();

  const [show, setShow] = useState({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const getShow = async () => {
    try {
      const response = await showService.getShow(showId);
      setShow(response);
      setError(false);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };
  useEffect(() => {
    getShow();
    // eslint-disable-next-line
  }, [showId]);

  const handleChange = (e) => {
    setShow((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await showService.editShow(showId, show);
      navigate(`/shows/${showId}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div class="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
  <h2 class="text-2xl font-bold mb-4">Edit show</h2>
  <form onSubmit={handleSubmit} class="bg-white p-4 rounded-lg shadow-lg">
    {error && <p>Something went wrong. Couldn't find your course</p>}
    <label class="block font-bold mb-2">Show title</label>
    <input
      type="text"
      name="title"
      value={show.title}
      onChange={handleChange}
      required
      class="w-full p-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
    <label class="block font-bold mb-2">Creator</label>
    <input
      type="text"
      name="creator"
      value={show.creator}
      onChange={handleChange}
      required
      class="w-full p-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
    <label class="block font-bold mb-2">Launched date</label>
    <input
      type="number"
      name="launched"
      value={show.launched}
      onChange={handleChange}
      required
      class="w-full p-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
    <label class="block font-bold mb-2">Genre</label>
    <input
      type="text"
      name="genre"
      value={show.genre}
      onChange={handleChange}
      required
      class="w-full p-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
    <label class="block font-bold mb-2">Image</label>
    <input
      type="text"
      name="image"
      value={show.image}
      onChange={handleChange}
      required
      class="w-full p-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
    <label class="block font-bold mb-2">Description</label>
    <input
      type="text"
      name="description"
      value={show.description}
      onChange={handleChange}
      required
      class="w-full p-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
    <button type="submit" class="btn w-full">
      Save changes
    </button>
  </form>
</div>


  );
}
