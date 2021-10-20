import React, { useState } from "react";
import Welcome from "./Welcome";

const ListComponent = () => {
  const [list, setlist] = useState(["bmw", "hyundai", "volvo", "lexus"]);
  return (
    <div>
      {list.map((li) => {
        return (
          <>
            <Welcome username={li}></Welcome>
          </>
        );
      })}
    </div>
  );
};

export default ListComponent;
