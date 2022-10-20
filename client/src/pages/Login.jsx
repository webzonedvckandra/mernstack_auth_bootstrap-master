import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { login } from "../redux/features/AuthSlice";


const initialState = {
  email: "",
  password: "",
};

function Login() {
  const [formValue, setFormValue] = useState(initialState);
  const { email, password } = formValue;
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(login({ formValue, navigate, toast }));
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };



  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "450px",
        alignContent: "center",
        marginTop: "120px",
      }}
    >
      <form className="shadow" onSubmit={handleSubmit}>
        <h5>Sign In</h5>
        <div className="form-row ">
          <div className="form-group col-md-12">
            <label htmlFor="inputEmail4">Email</label>
            <input
              label="Email"
              type="email"
              value={email}
              name="email"
              onChange={onInputChange}
              required
              validation="Please provide your email"
              className="form-control"
              id="inputEmail4"
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="inputPassword4">Password</label>
            <input
              label="Password"
              type="password"
              value={password}
              name="password"
              onChange={onInputChange}
              required
              validation="Please provide your password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          {/* <span type="button" onClick={handleGoogleLogin}>Sign In</span> */}
          Sign In
        </button>
        <div className="text-center">
          <Link to="/register">
            <p>Don't have an account ? Sign Up</p>
          </Link>
        </div>
      </form>


    </div>
  );
}

export default Login;
