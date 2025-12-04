
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import { use,  } from "react";
import { AuthContext } from "../contexts/AuthContext";


const Login = () => {
  const { singInUser, singInWithGoogle } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    singInUser(email, password)
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Welcome Back!",
          text: "Login successful",
          timer: 1500,
          showConfirmButton: false,
          timerProgressBar: true,
        });
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleGoogleLogin = () => {
    singInWithGoogle()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Welcome Back!",
          text: "Google login successful",
          timer: 1500,
          showConfirmButton: false,
          timerProgressBar: true,
        });
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <h1 className="text-3xl font-bold p-4 text-center">Login now!</h1>

        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input name="email" type="email" className="input input-bordered" required />

            <label className="label">Password</label>
            <input name="password" type="password" className="input input-bordered" required />

            <button type="submit" className="btn btn-neutral mt-4 w-full">Login</button>

            <p className="text-center mt-3">
              Don’t have an account?
              <Link className="text-blue-600" to="/auth/register"> Register</Link>
            </p>

            <div className="divider">OR</div>

            <button onClick={handleGoogleLogin} type="button" className="btn btn-outline w-full flex items-center gap-2">
              <FcGoogle /> Login with Google
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
