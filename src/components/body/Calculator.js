import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./Calculator.css";
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
        <Container>
          <Row>
            <Col xs={1}>b :</Col>
            <Col>
              <input
                className="mb-3 form-control "
                value={base}
                onChange={(e) => setBase(e.target.value)}
              ></input>{" "}
            </Col>
            <Col>
              <span> "1 &lt;= b &lt;= 10 " </span>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col xs={1}> p :</Col>
            <Col>
              <input
                value={power}
                className="mb-3 form-control"
                onChange={(e) => setPower(e.target.value)}
              ></input>
            </Col>
            <Col>
              <span> "0 &lt;= p &lt;= 10 " </span> <br /> <br />
            </Col>
          </Row>
        </Container>{" "}
        <div className="calculator_middle">
          <button
            type="submit"
            onClick={addValue}
            className="btn btn-primary calculateBtn"
          >
            Calculate
          </button>
        </div>
        <h3 className="m-3 ">Value : {ans}</h3>
      </div>
    </div>
  );
};

export default Calculator;
