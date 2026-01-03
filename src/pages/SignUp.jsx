import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Loading from "../components/Loading";
import { FaFacebook } from "react-icons/fa6";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";


export default function SignUp() {
  const { registerWithEmail, signInWithGoogle, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
 const [success, setSuccess] = useState("");

const fbProvider = new FacebookAuthProvider();


  const navigate = useNavigate();

  const validatePassword = (pass) => {
    const errors = [];
    if (!/[A-Z]/.test(pass)) errors.push("Must include uppercase");
    if (!/[a-z]/.test(pass)) errors.push("Must include lowercase");
    if (pass.length < 6) errors.push("Must be at least 6 characters");
    return errors;
  };

const handleFacebookLogin = async () => {
  try {
    const result = await signInWithPopup(auth, fbProvider);
    const user = result.user;
    const token = await user.getIdToken();

    toast.success("Logged in with Facebook");
    navigate("/") 
  } catch (err) {
    toast.error(err.message);
  }
};



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError({});
    setSuccess("");


    const errors = validatePassword(password);
    if (errors.length > 0) {
      setError({ password: errors.join(", ") });
      toast.error(errors.join(", "));
      setLoading(false);

      return;
    }

    try {
      await registerWithEmail(email, password);
      if (name || photo) {
        await updateUserProfile({ displayName: name, photoURL: photo });
      }
      setSuccess("Account created successfully!");
      
      toast.success("Account created");
     setTimeout(() => {
  navigate("/");
}, 1500);

    } catch (err) {
      toast.error(err.message);
    }
    finally {
      setLoading(false);
    }

  };


  return (
    <div className="container mx-auto p-6 max-w-md md:py-30 py-70 text-blue-500">
      <h2 className="text-2xl font-bold text-secondary mb-4">Signup</h2>
            {success && <div className="p-2 bg-green-100 text-green-700 rounded mb-2">{success}</div>}
      {error.general && <div className="p-2 bg-red-100 text-red-700 rounded mb-2">{error.general}</div>}

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
        {error.password && <p className="text-red-500 text-sm">{error.password}</p>}


        <button type="submit" disabled={loading} className="btn btn-primary w-full">
          {loading ? "loading..." : "Register"}
        </button>

      </form>

      <div className="flex gap-2 mt-4">
  <button
    type="button"
    onClick={() => {
      setEmail("demo.user@homenest.com");
      setPassword("DemoUser123!");
    }}
    className="btn btn-outline w-1/2"
  >
    Demo User
  </button>

  <button
    type="button"
    onClick={() => {
      setEmail("demo.admin@homenest.com");
      setPassword("DemoAdmin123!");
    }}
    className="btn btn-outline w-1/2"
  >
    Demo Admin
  </button>
</div>


      <div className="mt-4 text-center ">--OR--</div>

      <button
  onClick={handleFacebookLogin}
  className="btn btn-outline w-full mt-2 flex justify-center"
>
 <FaFacebook></FaFacebook> Continue with Facebook
</button>

      <button onClick={async () => {
        setLoading(true);

        try {
          await signInWithGoogle();
            setSuccess("Logged in with Google");

                toast.success("Logged in with Google");
          navigate("/");
        } catch (e) {
              setError({ general: e.message });

          toast.error(e.message);

        }
        finally {
          setLoading(false);
        }
      }} className="btn btn-outline w-full mt-2"   disabled={loading}
>
        <FcGoogle />{loading ? <Loading/> : "Continue with Google"}

      </button>

      

      <p className="mt-4 text-center">Already have an account? <Link to="/login" className="text-blue-900 underline">Login</Link></p>
    </div>
  );
}
