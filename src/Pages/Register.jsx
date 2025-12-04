import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const { singInWithGoogle, createUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value.trim();
    const photourl = form.photourl.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (password.length < 6 || !/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must contain uppercase, lowercase and be at least 6 characters.",
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateProfile(user, {
          displayName: name,
          photoURL: photourl || "https://i.ibb.co/3rYVZ7H/default-user.png",
        }).then(() => {
          setUser({
            ...user,
            displayName: name,
            photoURL: photourl || "https://i.ibb.co/3rYVZ7H/default-user.png",
          });

          Swal.fire({
            icon: "success",
            title: "Registration Successful 🎉",
            text: "Welcome to Artify!",
            timer: 1800,
            showConfirmButton: false,
            timerProgressBar: true,
          });

          navigate("/");
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
        });
      });
  };

  const handleGoogleSignIn = () => {
    singInWithGoogle()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Welcome!",
          text: "Signed up with Google successfully!",
          timer: 1800,
          showConfirmButton: false,
          timerProgressBar: true,
        });

        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm mt-36 mx-auto shadow-2xl">
      <div className="card-body">
        <h1 className="text-4xl font-bold text-center mb-4">Register now!</h1>

        <form onSubmit={handleRegister}>
          <label className="label">Name</label>
          <input name="name" type="text" className="input input-bordered w-full mb-2" required />

          <label className="label">Photo URL</label>
          <input name="photourl" type="text" className="input input-bordered w-full mb-2" />

          <label className="label">Email</label>
          <input name="email" type="email" className="input input-bordered w-full mb-2" required />

          <label className="label">Password</label>
          <input name="password" type="password" className="input input-bordered w-full mb-2" required />

          <button type="submit" className="btn btn-neutral w-full mt-2">Register</button>

          <div className="divider">OR</div>

          <button onClick={handleGoogleSignIn} type="button" className="btn btn-outline w-full flex items-center justify-center gap-2">
            <FcGoogle /> Sign up with Google
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?
          <NavLink className="underline text-blue-600" to="/auth/login">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
