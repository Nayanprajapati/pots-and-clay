// import React, { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import { loginUserApi } from "../../Api/Api";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "react-toastify/dist/ReactToastify.css";
// import "./Login.css";
// import { Link, useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const navigate = useNavigate();

//   const validate = () => {
//     let isValid = true;

//     setEmailError("");
//     setPasswordError("");

//     if (email === "" || !email.includes("@")) {
//       setEmailError("Email is empty or invalid");
//       toast.error("Email is empty or invalid"); // Toast for invalid email
//       isValid = false;
//     }
//     if (password.trim() === "") {
//       setPasswordError("Password is empty");
//       toast.error("Password is empty"); // Toast for empty password
//       isValid = false;
//     }

//     return isValid;
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!validate()) {
//       return;
//     }

//     const data = {
//       email: email,
//       password: password,
//     };

//     try {
//       const res = await loginUserApi(data);

//       if (res.data.success === false) {
//         toast.error(res.data.message);
//       } else {
//         localStorage.setItem("user", JSON.stringify(res.data.userData));
//         navigate("/");
//         toast.success(res.data.message);
//       }
//     } catch (error) {
//       toast.error("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center">
//       <div className="card p-4 shadow-sm">
//         <h1 className="text-center mb-4">Login to your Account</h1>

//         <form onSubmit={handleLogin}>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               Email address
//             </label>
//             <input
//               id="email"
//               type="email"
//               className={`form-control ${emailError ? "is-invalid" : ""}`}
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email address"
//             />
//             {emailError && <div className="invalid-feedback">{emailError}</div>}
//           </div>

//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>
//             <input
//               id="password"
//               type={showPassword ? "text" : "password"}
//               className={`form-control ${passwordError ? "is-invalid" : ""}`}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//             />
//             <button
//               type="button"
//               className="btn btn-secondary btn-sm"
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               {showPassword ? "Hide" : "Show"} Password
//             </button>
//             {passwordError && (
//               <div className="invalid-feedback">{passwordError}</div>
//             )}
//           </div>

//           <div className="mb-3 d-flex justify-content-between align-items-center">
//             <Link to="/forgot-password">Forgot Password?</Link>

//             <button type="submit" className="btn btn-primary">
//               Login
//             </button>
//           </div>
//         </form>

//         <div className="text-center">
//           <p>
//             Don't have an account?
//             <Link to="/register">
//               {" "}
//               <a href="/signup">Sign Up</a>{" "}
//             </Link>{" "}
//           </p>
//         </div>
//       </div>
//       <ToastContainer
//         position="top-center"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
//     </div>
//   );
// };

// export default Login;
