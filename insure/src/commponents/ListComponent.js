import React, { useState } from "react";

const ListComponent = () => {
  const [list, setlist] = useState(["bmw", "hyundai", "volvo", "lexus"]);
  return (
    <div>
      {list.map((li) => {
        return (
          <>
            <p>{li} 차량이 있습니다.</p>
          </>
        );
      })}
    </div>
  );
};

export default ListComponent;
