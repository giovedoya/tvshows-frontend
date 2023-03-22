import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import showService from "../services/showService";

export default function New() {
  const initialState = {
    title: "",
    creator: "",
    launched: "",
    genre: "",
    image: "",
    description: "",
  };
  const [newShow, setNewShow] = useState(initialState);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewShow((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const showNew = await showService.createShow(newShow);
      setError("");
      navigate(`/shows/${showNew._id}`);
      setNewShow(initialState);
    } catch (err) {
      console.error(err);
      setError(err);
    }
  };

  return (
<div class="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
  <h2 class="text-2xl font-bold mb-4 uppercase">Create a TV show</h2>
  <form onSubmit={handleSubmit} class="bg-white p-4 rounded-lg shadow-lg">
    {error && <p>Something went wrong. Couldn't create your course</p>}
    <label class="block font-bold mb-2">Show title</label>
    <input
      type="text"
      name="title"
      value={newShow.title}
      onChange={handleChange}
      required
      class="w-full p-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
    <label class="block font-bold mb-2">Creator</label>
    <input
      type="text"
      name="creator"
      value={newShow.creator}
      onChange={handleChange}
      required
      class="w-full p-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
    <label class="block font-bold mb-2">Launched date</label>
    <input
      type="number"
      name="launched"
      value={newShow.launched}
      onChange={handleChange}
      required
      class="w-full p-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
    <label class="block font-bold mb-2">Genre</label>
    <input
      type="text"
      name="genre"
      value={newShow.genre}
      onChange={handleChange}
      required
      class="w-full p-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
    <label class="block font-bold mb-2">Image</label>
    <input
      type="text"
      name="image"
      value={newShow.image}
      onChange={handleChange}
      required
      class="w-full p-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
    <label class="block font-bold mb-2">Description</label>
    <textarea
      name="description"
      value={newShow.description}
      onChange={handleChange}
      required
      class="w-full p-2 mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    ></textarea>
    <button type="submit" class="btn w-full">
      Create show
    </button>
  </form>
</div>



  );
}
