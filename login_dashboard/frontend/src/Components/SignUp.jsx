import React from "react";
import { useState } from "react";
import { MDBContainer, MDBInput, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import Validation from "../Validations/SignupValidation";
import axios from "axios";

function SignUp() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    setErrors(Validation(values));
    if (
      errors.username === "" &&
      errors.email === "" &&
      errors.password === ""
    ) {
      axios
        .post("http://localhost:8081/signup", values)
        .then((res) => {
          console.log(res.data);
          navigate("/");
        })
        .catch((err) => {
          if (err.response && err.response.status === 400) {
            alert(err.response.data.error); // Alert the specific error message
          } else {
            console.error(err);
          }
        });
    }
  };
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <form onSubmit={handleSubmit}>
        {errors.username && (
          <span className="text-danger">{errors.username}</span>
        )}
        <MDBInput
          wrapperClass="mb-4"
          label="User Name"
          id="form1"
          type="text"
          name="username"
          onChange={handleInput}
        />

        {errors.email && <span className="text-danger">{errors.email}</span>}
        <MDBInput
          wrapperClass="mb-4"
          label="Email address"
          id="form2"
          type="email"
          name="email"
          onChange={handleInput}
        />

        {errors.password && (
          <span className="text-danger">{errors.password}</span>
        )}
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          id="form3"
          type="password"
          name="password"
          onChange={handleInput}
        />

        {errors.confirmPassword && (
          <span className="text-danger">{errors.confirmPassword}</span>
        )}
        <MDBInput
          wrapperClass="mb-4"
          label="Password"
          id="form4"
          type="password"
          name="confirmPassword"
          onChange={handleInput}
        />

        <MDBBtn className="mb-4" type="submit">
          Sign up
        </MDBBtn>
      </form>

      <div className="text-center">
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
        <p style={{ marginTop: "10px" }}>
          Already have an account? <Link to="/">Log in</Link>
        </p>
      </div>
    </MDBContainer>
  );
}

export default SignUp;
