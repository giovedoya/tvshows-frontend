import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  const { show } = props;
  const style = {
    width: '300px',
  }
  return (
    <div>
      <div>
        <img style={style} src={show.image} alt={show.title} />
        <h2>
          <Link to={`/shows/${show._id}`}>{show.title}</Link>
        </h2>
      </div>
    </div>
  );
}
