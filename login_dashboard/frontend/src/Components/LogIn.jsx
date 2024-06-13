import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import Validation from "../Validations/LoginValidation";
function LogIn() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);
    if (!Object.values(validationErrors).some((error) => error !== "")) {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          console.log("Response from server", res.data);
          if (res.data == "Success") {
            navigate("/dashboard");
          } else {
            alert("Invalid Email or Password");
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <form onSubmit={handleSubmit}>
        {errors.email && <span className="text-danger">{errors.email}</span>}
        <MDBInput
          wrapperClass="mb-4"
          name="email"
          label="Email address"
          id="form1"
          type="email"
          onChange={handleInput} // Update email state
        />

        {errors.password && (
          <span className="text-danger">{errors.password}</span>
        )}
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          name="password"
          id="form2"
          type="password"
          onChange={handleInput} // Update password state
        />

        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox
            name="flexCheck"
            value=""
            id="flexCheckDefault"
            label="Remember me"
          />
          <a href="!#">Forgot password?</a>
        </div>

        <MDBBtn className="mb-4" type="submit">
          Sign in
        </MDBBtn>
      </form>

      <div className="text-center">
        <p>
          Not a member? <Link to="/signup">Register</Link>
        </p>
        <p>or sign up with:</p>

        <div
          className="d-flex justify-content-between mx-auto"
          style={{ width: "40%" }}
        >
          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            style={{ color: "#1266f1" }}
          >
            <MDBIcon fab icon="facebook-f" size="sm" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            style={{ color: "#1266f1" }}
          >
            <MDBIcon fab icon="twitter" size="sm" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            style={{ color: "#1266f1" }}
          >
            <MDBIcon fab icon="google" size="sm" />
          </MDBBtn>

          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            style={{ color: "#1266f1" }}
          >
            <MDBIcon fab icon="github" size="sm" />
          </MDBBtn>
        </div>
      </div>
    </MDBContainer>
  );
}

export default LogIn;
