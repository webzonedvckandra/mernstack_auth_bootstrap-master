import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { register } from '../redux/features/AuthSlice';


const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Register() {
  const [formValue, setFormValue] = useState(initialState);
  const { email, password, firstName, lastName, confirmPassword } = formValue;
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error)

  }, [error])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("Password should match");
    }
    if (email && password && firstName && lastName && confirmPassword) {
      dispatch(register({ formValue, navigate, toast }));
    }

  }
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  return (
    <div style={{
      margin: "auto",
      padding: "15px",
      maxWidth: "450px",
      alignContent: "center",
      marginTop: "100px",
    }}>
      <form className="shadow" onSubmit={handleSubmit}>
        <h5>Sign Up</h5>
        <div className="form-row ">
          <div className="form-group col-md-6">
            {/* <label htmlFor="inputEmail4">First Name</label> */}
            <input
              label="First Name"
              type="text"
              value={firstName}
              name="firstName"
              onChange={onInputChange}
              required
              invalid
              validation="Please provide your first name"
              className="form-control"
              placeholder='Enter first name...'
            />
          </div>

          <div className="form-group col-md-6">
            {/* <label htmlFor="inputPassword4">Last Name</label> */}
            <input
              label="Last Name"
              type="text"
              value={lastName}
              name="lastName"
              onChange={onInputChange}
              required
              invalid
              validation="Please provide your last name"
              className="form-control"
              placeholder='Enter last name...'
            />
          </div>

          <div className="form-group col-md-12">
            {/* <label htmlFor="inputPassword4">Email</label> */}
            <input
              label="Email"
              type="email"
              value={email}
              name="email"
              onChange={onInputChange}
              required
              invalid
              validation="Please provide your email"

              className="form-control"
              placeholder='Enter your email id...'
            />
          </div>
          <div className="form-group col-md-12">
            {/* <label htmlFor="inputPassword4">Password</label> */}
            <input
              label="Password"
              type="password"
              value={password}
              name="password"
              onChange={onInputChange}
              required
              invalid
              validation="Please provide your password"

              className="form-control"
              placeholder='Enter password...'
            />
          </div>
          <div className="form-group col-md-12">
            {/* <label htmlFor="inputPassword4">Confirm Password</label> */}
            <input
              label="Password Confirm"
              type="password"
              value={confirmPassword}
              name="confirmPassword"
              onChange={onInputChange}
              required
              invalid
              validation="Please provide confirm password"
              placeholder='Confirm password...'
              className="form-control"

            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          {/* <span type="button" onClick={handleGoogleLogin}>Sign In</span> */}
          Register
        </button>
        <div className="text-center">
          <Link to="/login">
            <p>Already have an account ? Sign In</p>
          </Link>
        </div>
      </form>


    </div>
  )
}

export default Register
