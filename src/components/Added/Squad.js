import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import './Squad.css'
const cartFont = <FontAwesomeIcon icon={faMusic} />;
const Squad = (props) => {
  const { squad } = props;

  let total = 0;
  for (const member of squad) {
    total = total + member.value;
  }

  return (
    <div className="col pl mt-5 ms-1">
      <h2>PlayList</h2>
      <hr />
      <h6>Added: {squad.length} Song</h6>
      <p>
        {squad.map((element) => (
          <p style={{ backgroundColor: 'lightgray', boxShadow: '2px 2px 10px gray'}}>{cartFont} {element.name}</p>
        ))}
      </p>
    </div>
  );
};

export default Squad;
