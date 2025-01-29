import React, { useState } from "react";

export default function Debug({ isClicked, debug_element }) {
  const [isVisible, setIsVisible] = useState(false);
  //return <h1>{isClicked ? debug_element : "'Click to see'"}</h1>;
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && (
        <p>This is the toggled content! {JSON.stringify(debug_element)}</p>
      )}
    </div>
  );
}
