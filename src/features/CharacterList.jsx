import React from "react";

const CharacterList = ({ path, full_name }) => {
  return (
    <div>
      <Card.Title>{full_name}</Card.Title>
    </div>
  );
};

export default CharacterList;
