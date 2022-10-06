import React, { useState } from "react";

const Calculator = () => {
  const [var1, setVar1] = useState(0);
  const [var2, setVar2] = useState(0);
  const [ans, setAns] = useState(0);

  function addValue() {
    let ans = parseInt(var1) ** parseInt(var2);
    if (ans > 9999) {
      setAns("error");
    }
    setAns(ans);
  }
  return (
    <div>
      <div className="container">
        <h1>Exponential Calculator</h1>
        <p>
          Our Calculator can Calculate an Exponential value for b<sup>a</sup>.
        </p>
        <p>Where 'b' is the base and 'a' is the power</p>
        {/* <h3>Exponential Calculator</h3> */}b :<span> </span>{" "}
        <input
          className="mb-3 "
          value={var1}
          onChange={(e) => setVar1(e.target.value)}
        ></input>{" "}
        <span> "0 &lt; b &lt; 5 " </span> <br />a :<span> </span>{" "}
        <input
          value={var2}
          className="mb-3 "
          onChange={(e) => setVar2(e.target.value)}
        ></input>{" "}
        <span> "0 &lt; a &lt; 10 " </span> <br /> <br />
        <button type="submit" onClick={addValue} className="btn btn-primary">
          Calculate
        </button>
        <h3 className="m-3 ">Value : {ans}</h3>
      </div>
      s
    </div>
  );
};

export default Calculator;
