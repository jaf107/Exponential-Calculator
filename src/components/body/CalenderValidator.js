import React, { useState } from "react";
import "./CalenderValidator.css";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

const CalenderValidator = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [ans, setAns] = useState(false);

  function isLeapYear(year) {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  }
  function validDay(day, month, year) {
    if (day >= 1) {
      if (month.toLowerCase() === "feb" || month.toLowerCase() === "february") {
        if (parseInt(day) === 29 && isLeapYear(year)) {
          // console.log(day, month, year);
          // console.log("LEAP YEAR");
          return true;
        }
        if (day <= 28) return true;
      }
      if (
        month.toLowerCase() === "apr" ||
        month.toLowerCase() === "april" ||
        month.toLowerCase() === "jun" ||
        month.toLowerCase() === "june" ||
        month.toLowerCase() === "sep" ||
        month.toLowerCase() === "september" ||
        month.toLowerCase() === "nov" ||
        month.toLowerCase() === "november"
      ) {
        if (day <= 30) return true;
      }
      if (
        month.toLowerCase() === "jan" ||
        month.toLowerCase() === "january" ||
        month.toLowerCase() === "mar" ||
        month.toLowerCase() === "march" ||
        month.toLowerCase() === "may" ||
        month.toLowerCase() === "jul" ||
        month.toLowerCase() === "july" ||
        month.toLowerCase() === "aug" ||
        month.toLowerCase() === "august" ||
        month.toLowerCase() === "oct" ||
        month.toLowerCase() === "october" ||
        month.toLowerCase() === "dec" ||
        month.toLowerCase() === "december"
      ) {
        if (day <= 31) {
          return true;
        }
      }
    }
    return false;
  }

  function validMonth(month) {
    if (
      month.toLowerCase() === "jan" ||
      month.toLowerCase() === "january" ||
      month.toLowerCase() === "feb" ||
      month.toLowerCase() === "february" ||
      month.toLowerCase() === "mar" ||
      month.toLowerCase() === "march" ||
      month.toLowerCase() === "apr" ||
      month.toLowerCase() === "april" ||
      month.toLowerCase() === "may" ||
      month.toLowerCase() === "jun" ||
      month.toLowerCase() === "june" ||
      month.toLowerCase() === "jul" ||
      month.toLowerCase() === "july" ||
      month.toLowerCase() === "aug" ||
      month.toLowerCase() === "august" ||
      month.toLowerCase() === "sep" ||
      month.toLowerCase() === "september" ||
      month.toLowerCase() === "oct" ||
      month.toLowerCase() === "october" ||
      month.toLowerCase() === "nov" ||
      month.toLowerCase() === "november" ||
      month.toLowerCase() === "dec" ||
      month.toLowerCase() === "december"
    )
      return true;
    return false;
  }
  function validYear(year) {
    if (year > 1980 && year < 2022) {
      return true;
    }
    return false;
  }

  function validateDate() {
    // console.log(day, month, year);
    if (validDay(day, month, year) && validMonth(month) && validYear(year)) {
      setAns("Valid");
    } else {
      setAns("Invalid");
    }

    // setDay("");
    // setMonth("");
    // setYear("");
  }

  return (
    <div>
      <div className="container">
        <h1>Calender Validator</h1>
        <p>
          Our Tool validates the input date
          <br /> <br />
          The values of day should be within 1 to 30.
          <br />
          The values of month should be within Jan to Dec.
          <br />
          <br />
          Input should be in the format : "Jan" or "January"
          <br />
          <br />
          The values of year should be within 1980 to 2022.
        </p>
      </div>

      <div className="container ">
        <Container>
          <Row>
            <Col>
              <input
                className="mb-3 form-control"
                placeholder="Input Day"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              ></input>
            </Col>
            <Col>
              <input
                className="mb-3 form-control"
                placeholder="Input Month "
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              ></input>
            </Col>
            <Col>
              <input
                className="mb-3 form-control"
                placeholder="Input Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              ></input>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="calender_middle ">
        <button
          type="submit"
          onClick={validateDate}
          className="btn btn-primary ml-4 validateBtn"
        >
          Validate
        </button>
      </div>
      <h3 className="m-3 ">Validity: {ans}</h3>
    </div>
  );
};

export default CalenderValidator;
