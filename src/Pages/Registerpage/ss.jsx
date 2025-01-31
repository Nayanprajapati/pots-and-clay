// import React, { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import { registerUserApi } from "../../Api/Api"; // Ensure this API endpoint is correctly implemented
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Register.css";
// import { Link, useNavigate } from "react-router-dom";
// import validator from "validator"; // Ensure validator is installed using npm install validator

// const Register = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value.trim() });
//   };

//   const validateAndSanitize = () => {
//     let tempErrors = {};
//     let isValid = true;

//     // Validate firstName and lastName
//     if (!formData.firstName) {
//       tempErrors.firstName = "First name is required";
//       isValid = false;
//     }

//     if (!formData.lastName) {
//       tempErrors.lastName = "Last name is required";
//       isValid = false;
//     }

//     // Validating email
//     if (!validator.isEmail(formData.email)) {
//       tempErrors.email = "Email is not valid";
//       isValid = false;
//     }

//     // Validate password for length and complexity
//     if (!validator.isStrongPassword(formData.password, {
//         minLength: 8,
//         minLowercase: 1,
//         minUppercase: 1,
//         minNumbers: 1,
//         minSymbols: 1,
//     })) {
//       tempErrors.password = "Password must be stronger";
//       isValid = false;
//     }

//     setErrors(tempErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateAndSanitize()) {
//       toast.error("Please correct the errors in the form");
//       return;
//     }

//     try {
//       const response = await registerUserApi(formData);
//       if (response.data.success) {
//         toast.success("Registration successful!");
//         navigate("/login");
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       toast.error("Registration failed. Please try again.");
//     }
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center">
//       <div className="card p-4 shadow-sm">
//         <h1 className="text-center mb-4">Create an Account</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="firstName" className="form-label">
//               First Name
//             </label>
//             <input
//               id="firstName"
//               type="text"
//               className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleInputChange}
//               placeholder="Enter your first name"
//             />
//             {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
//           </div>
//           <div className="mb-3">
//             <label htmlFor="lastName" className="form-label">
//               Last Name
//             </label>
//             <input
//               id="lastName"
//               type="text"
//               className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleInputChange}
//               placeholder="Enter your last name"
//             />
//             {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
//           </div>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               Email Address
//             </label>
//             <input
//               id="email"
//               type="email"
//               className={`form-control ${errors.email ? "is-invalid" : ""}`}
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="Enter your email"
//             />
//             {errors.email && <div className="invalid-feedback">{errors.email}</div>}
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>
//             <input
//               id="password"
//               type={showPassword ? "text" : "password"}
//               className={`form-control ${errors.password ? "is-invalid" : ""}`}
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               placeholder="Create a password"
//             />
//             <button type="button" onClick={() => setShowPassword(!showPassword)} className="btn btn-secondary btn-sm">
//               {showPassword ? "Hide" : "Show"} Password
//             </button>
//             {errors.password && <div className="invalid-feedback">{errors.password}</div>}
//           </div>
//           <div className="d-flex justify-content-end">
//             <button type="submit" className="btn btn-primary">
//               Register
//             </button>
//           </div>
//         </form>
//         <div className="text-center mt-2">
//           Already have an account? <Link to="/login">Log in</Link>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Register;
