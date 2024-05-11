import React from "react";

function Button({ children, x, y }) {
  function func1() {
    alert(x);
  }
  return (
    <div>{y === 0 ? "" : <button onClick={func1}>{children}</button>}</div>
  );
}

export default Button;
