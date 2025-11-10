import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


export default function SignUp() {
  const { registerWithEmail, signInWithGoogle, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (pass) => {
    const errors = [];
    if (!/[A-Z]/.test(pass)) errors.push("Must include uppercase");
    if (!/[a-z]/.test(pass)) errors.push("Must include lowercase");
    if (pass.length < 6) errors.push("Must be at least 6 characters");
    return errors;
  };


  const handleSubmit = async (e) => {
  e.preventDefault();

  const errors = validatePassword(password);
  if (errors.length > 0) {
    toast.error(errors.join(", "));
    return;
  }

  try {
    await registerWithEmail(email, password);
    if (name || photo) {
      await updateUserProfile({ displayName: name, photoURL: photo });
    }
    toast.success("Account created");
    navigate("/");
  } catch (err) {
    toast.error(err.message);
  }
};


  return (
    <div className="container mx-auto p-6 max-w-md md:py-30 py-70 ">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <form onSubmit={handleSubmit} className="space-y-3 border-2 rounded-xl p-5 shadow-2xl">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required className="input input-bordered w-full" />
        <input value={photo} onChange={(e) => setPhoto(e.target.value)} placeholder="Photo URL" required className="input input-bordered w-full" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" required className="input input-bordered w-full" />
       
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

        <button type="submit" className="btn btn-primary">Register</button>
      </form>

      <div className="mt-4 text-center ">--OR--</div>
      <button onClick={async () => { try { await signInWithGoogle(); navigate("/"); } catch (e) { toast.error(e.message); } }} className="btn btn-outline w-full mt-2">
        <FcGoogle />Continue with Google
      </button>

      <p className="mt-4 text-center">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></p>
    </div>
  );
}
