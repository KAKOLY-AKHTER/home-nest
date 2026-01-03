import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../context/AuthContext";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import Loading from "../components/Loading";
import { FaFacebook } from "react-icons/fa6";
import { FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";


export default function Login() {
  const { loginWithEmail, signInWithGoogle } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [success, setSuccess] = useState("");

const fbProvider = new FacebookAuthProvider();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";


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

       if (!email.includes("@")) {
      setError({ email: "Invalid email format" });
      setLoading(false);
      return;
    }
    if (password.length < 6) {
      setError({ password: "Password must be at least 6 characters" });
      setLoading(false);
      return;
    }



    try {
      await loginWithEmail(email, password);
            setSuccess("Logged in successfully!");

      toast.success("Logged in");
      navigate(from, { replace: true });
    } catch (err) {
            setError({ general: err.message });

      toast.error(err.message);
    }
     finally {
      setLoading(false);
    }

  };

 
  return (
    <div className="container mx-auto p-6 max-w-md md:py-30 py-70 text-blue-500">
      <h2 className="text-2xl font-bold mb-4 text-secondary">Login</h2>
            {success && <div className="p-2 bg-green-100 text-green-700 rounded mb-2">{success}</div>}
      {error.general && <div className="p-2 bg-red-100 text-red-700 rounded mb-2">{error.general}</div>}

      <form onSubmit={handleSubmit} className="space-y-3 border-2 p-5 rounded-xl shadow-2xl">
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" className="input input-bordered w-full" required />
           {error.email && <p className="text-red-500 text-sm">{error.email}</p>}

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


        <div className="flex justify-between items-center">
          <button className="btn btn-primary " type="submit" disabled={loading}>
            {loading ? "loading..." : "Login"}
          </button>

          <Link to="/forgot-password" state={{ email }}>Forgot Password?</Link>
        </div>
      </form>
 {/* Demo credentials */}
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



     
      <div className="mt-4 text-center">---OR---</div>

      <button
  onClick={handleFacebookLogin}
  className="btn btn-outline w-full mt-2 flex justify-center"
>
 <FaFacebook></FaFacebook> Continue with Facebook
</button>

    <button
        onClick={async () => {
          setLoading(true);
          try {
            await signInWithGoogle();
            setSuccess("Logged in with Google");
            toast.success("Logged in with Google");
            navigate("/");
          } catch (e) {
            setError({ general: e.message });
            toast.error(e.message);
          } finally {
            setLoading(false);
          }
        }}
        className="btn btn-outline w-full mt-2 flex justify-center"
        disabled={loading}
      >
        <FcGoogle className="mr-2" /> {loading ? <Loading /> : "Continue with Google"}
      </button>


      <p className="mt-4 text-center">Don't have account? <Link to="/signup" className="text-blue-900 underline  ">Signup</Link></p>
    </div>
  );
}
