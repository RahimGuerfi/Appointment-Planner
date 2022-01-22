import React from "react";

export const Tile = ({ item }) => {
  return (
    <div className="tile-container">
      {Object.values(item).map((val, index) =>
        index === 0 ? (
          <p className="tile tile-title">{val}</p>
        ) : (
          <p className="tile">{val}</p>
        )
      )}
    </div>
  );
};
