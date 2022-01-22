import React from "react";
import { v4 as uuidv4 } from "uuid";
//Comps
import { Tile } from "../tile/Tile";

export const TileList = ({ data }) => {
  return (
    <div>
      {data.map((item, indx) => (
        <Tile key={uuidv4()} item={item} />
      ))}
    </div>
  );
};
