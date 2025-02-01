import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z]).{8,16}$/;
    return passwordRegex.test(password);
  };
  const validatePhone = (phone) => {
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (route) => {
    const newErrors = {};

    if (!name) newErrors.name = "Name is required!";
    if (!email) newErrors.email = "Email is required!";
    if (!phone) newErrors.phone = "Phone number is required!";
    if (!password) newErrors.password = "Password is required!";
    if (!confirmPassword)
      newErrors.confirmPassword = "Please confirm your password!";
    if (!acceptTerms)
      newErrors.acceptTerms = "You must accept the terms and conditions!";

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match!";
    }
    if (password && !validatePassword(password)) {
      newErrors.password =
        "Password must be 8-16 characters long and contain at least one letter.";
    }
    if (phone && !validatePhone(phone)) {
      newErrors.phone = "Phone number must be in the format 012-345-6789.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const data = {
      name,
      email,
      password,
      phone,
      acceptTerms,
    };

    try {
      const response = await axios.post(`z/${route}`, data);

      console.log("Response:", response.data);

      if (response.data.error) {
        toast.error(response.data.error, {
          theme: "dark",
        });
      } else {
        toast.success("Signed up successfully!", {
          theme: "dark",
        });
        navigate("/login");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Failed to sign up. Please try again later.";
      toast.error(errorMessage, {
        theme: "dark",
      });
    }
  };

  const handleAdminSignup = (e) => {
    e.preventDefault();
    handleSubmit("admin");
  };

  const handleUserSignup = (e) => {
    e.preventDefault();
    handleSubmit("user");
  };

  return (
    <div className="container-fluid h-sm-auto signup-page d-flex align-items-center justify-content-center p-0">
      <div className="row w-100">
        <div className="col-md-6 d-flex h-sm-auto justify-content-center right-section p-2">
          <div className="card form-card-parent h-sm-auto px-4 pt-3 pb-1 shadow-lg border-0 my-4">
            <h2 className="text-center mb-3 form-title">
              Sign Up for EasyReserve™
            </h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label Label">
                  Your Name
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className={`form-control form-control-signup ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <span className="input-group-text">
                    <i className="fa-solid fa-user"></i>
                  </span>
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
              </div>

              <div className="col mb-3">
                <label htmlFor="email" className="form-label Label">
                  Your Email
                </label>
                <div className="input-group">
                  <input
                    type="email"
                    className={`form-control form-control-signup ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <span className="input-group-text">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
              </div>

              <div className="col mb-3">
                <label htmlFor="phone" className="form-label Label">
                  Your Phone Number
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    className={`form-control form-control-signup ${
                      errors.phone ? "is-invalid" : ""
                    }`}
                    id="phone"
                    placeholder="012-345-7890"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.trim())}
                    required
                  />
                  <span className="input-group-text">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  {errors.phone && (
                    <div className="invalid-feedback">{errors.phone}</div>
                  )}
                </div>
              </div>

              {/* Password Input */}
              <div className="row mb-3 password-full">
                <div className="col your-pass">
                  <label htmlFor="password" className="form-label Label">
                    Your Password
                  </label>
                  <div className="input-group">
                    <input
                      type="password"
                      className={`form-control form-control-signup ${
                        errors.password ? "is-invalid" : ""
                      }`}
                      id="password"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <span className="input-group-text">
                      <i className="fa-solid fa-key"></i>
                    </span>
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>
                </div>

                <div className="col your-pass">
                  <label htmlFor="confirmPassword" className="form-label Label">
                    Confirm Password
                  </label>
                  <div className="input-group">
                    <input
                      type="password"
                      className={`form-control form-control-signup ${
                        errors.confirmPassword ? "is-invalid" : ""
                      }`}
                      id="confirmPassword"
                      placeholder="Confirm"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    <span className="input-group-text">
                      <i className="fa-solid fa-key"></i>
                    </span>
                    {errors.confirmPassword && (
                      <div className="invalid-feedback">
                        {errors.confirmPassword}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className={`form-check-input ${
                    errors.acceptTerms ? "is-invalid" : ""
                  }`}
                  id="acceptTerms"
                  checked={acceptTerms}
                  onChange={() => setAcceptTerms(!acceptTerms)}
                />
                <label className="form-check-label" htmlFor="acceptTerms">
                  I accept the terms and conditions
                </label>
                {errors.acceptTerms && (
                  <div className="invalid-feedback">{errors.acceptTerms}</div>
                )}
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <button
                  onClick={handleAdminSignup}
                  className="btn btn-primary w-50 mx-1"
                >
                  Sign Up <br />
                  as admin
                </button>
                <button
                  onClick={handleUserSignup}
                  className="btn btn-primary w-50 mx-1"
                >
                  Sign Up <br />
                  as user
                </button>
              </div>

              <p className="text-center mt-3 already-word mb-4">
                Already have an account?{" "}
                <Link to="/login" className="login-word">
                  Log In
                </Link>
              </p>
            </form>
          </div>
        </div>

        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center left-section">
          <div className="text-center text-white left-text-easy">
            <h1 className="fs-1 website-name">EasyReserve™</h1>
            <p className="text-white-50">Your Path to Recovery Starts Here</p>
            <p>Join us to access personalized physical therapy services.</p>
            <button className="btn btn-outline-light m-2">Learn More</button>
            <button className="btn btn-outline-light m-2">Our Services</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
