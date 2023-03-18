import React, { useState, useEffect } from "react";
import showService from "../services/showService";
// import { Link } from 'react-router-dom'
import Card from "../components/Card";

export default function Home() {
  const [shows, setShow] = useState([]);

  const getShows = async () => {
    try {
      const response = await showService.getShows();
      setShow(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getShows();
  }, []);

  return (
    <div>
      {shows &&
        shows.length > 0 &&
        shows.map((elem) => {
          return <Card key={elem._id} show={elem} />;
        })}
    </div>
  );
}