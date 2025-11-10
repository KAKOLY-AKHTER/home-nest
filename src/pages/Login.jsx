import React, { useContext, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../context/AuthContext";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";


export default function Login() {
  const { loginWithEmail, signInWithGoogle } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginWithEmail(email, password);
      toast.success("Logged in");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
      toast.success("Logged in with Google");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-md md:py-30 py-70 text-blue-500">
      <h2 className="text-2xl font-bold mb-4 text-secondary">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-3 border-2 p-5 rounded-xl shadow-2xl">
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" className="input input-bordered w-full" required />
            <div className="relative">
                 <input
                   value={password}
                   onChange={(e) => setPassword(e.target.value)}
                   placeholder="Password"
                   type={show ? "text" : "password"}
                   className="input input-bordered w-full pr-10"
                   required
                 />
                 <button
                   type="button"
                   onClick={() => setShow((s) => !s)}
                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                 >
                   {show ? <FaEye /> : <FaRegEyeSlash />}
                 </button>
               </div>
       
        <div className="flex justify-between items-center">
          <button className="btn btn-primary" type="submit">Login</button>
          <Link to="/forgot-password" state={{ email }}>Forgot Password?</Link>
        </div>
      </form>

      <div className="mt-4 text-center">---OR---</div>
      <button onClick={handleGoogle} className="btn btn-outline w-full mt-2"><FcGoogle/>Continue with Google</button>

      <p className="mt-4 text-center">Don't have account? <Link to="/signup" className="text-secondary font-bold ">Signup</Link></p>
    </div>
  );
}
