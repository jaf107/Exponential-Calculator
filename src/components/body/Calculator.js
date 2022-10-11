import React, { useState } from "react";

const Calculator = () => {
  const [base, setBase] = useState(0);
  const [power, setPower] = useState(0);
  const [ans, setAns] = useState(0);

  function addValue() {
    let ans = parseInt(base) ** parseInt(power);
    if (base < 1 || base > 10) {
      // alert("Input b correctly");
      setAns("error");
    } else if (power < 0 || power > 10) {
      // alert("Input a correctly");
      setAns("error");
    } else {
      setAns(ans);
    }
  }
  return (
    <div>
      <div className="container">
        <h1>Exponential Calculator</h1>
        <p>
          Our Calculator can Calculate an Exponential value for b<sup>p</sup>.
          <br /> <br />
          The values of base should be within 1 to 10.
          <br />
          The values of power should be within 0 to 10.
        </p>
        <p>Where 'b' is the base and 'p' is the power.</p>
        {/* <h3>Exponential Calculator</h3> */}b :<span> </span>{" "}
        <input
          className="mb-3 "
          value={base}
          onChange={(e) => setBase(e.target.value)}
        ></input>{" "}
        <span> "1 &lt;= b &lt;= 10 " </span> <br />p :<span> </span>{" "}
        <input
          value={power}
          className="mb-3 "
          onChange={(e) => setPower(e.target.value)}
        ></input>{" "}
        <span> "0 &lt;= p &lt;= 10 " </span> <br /> <br />
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
