import React from "react";

function Comp3({setHeaderName}) {
  return (
    <>
      <div>Comp3</div>
      <Comp7 setHeaderName={setHeaderName} />
    </>
  );
}

export default Comp3;

function Comp6() {
  return <div>Comp6</div>;
}
function Comp7({setHeaderName}) {
  return (
    <button
      value="Shantanu"
      onClick={(e) => {
        setHeaderName(e.target.value);
      }}
    >
      click to print the value of header as Shantanu
    </button>
  );
}
