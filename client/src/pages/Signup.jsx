// // src/pages/Signup.jsx
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Signup = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     bio: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await fetch("http://localhost:5001/api/auth/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     const data = await res.json();

//     if (data.success) {
//       localStorage.setItem("token", data.token);
//       navigate("/home");
//     } else {
//       alert(data.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           name="fullName"
//           type="text"
//           placeholder="Full Name"
//           onChange={handleChange}
//         />
//         <input
//           name="email"
//           type="email"
//           placeholder="Email"
//           onChange={handleChange}
//         />
//         <input
//           name="password"
//           type="password"
//           placeholder="Password"
//           onChange={handleChange}
//         />
//         <input
//           name="bio"
//           type="text"
//           placeholder="Bio"
//           onChange={handleChange}
//         />
//         <button type="submit">Create Account</button>
//       </form>
//     </div>
//   );
// };

// export default Signup;
