import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import { useForm } from "react-hook-form";
import Spinner from "../../Spinner/Spinner";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn, loading } = useContext(AuthContext);
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    const { email, password } = data;

    if (!/^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{6,}$/.test(password)) {
      toast.error(
        "password must be have at least 6 characters, a capital & a small letter"
      );
      return;
    }

    signIn(email, password).then(() => {
      toast.success("user successfully sign in");
      navigate(location?.state ? location.state : "/");
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      {loading && <Spinner />}
      <div className="hero-content">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body w-96">
            <h2 className="text-3xl font-bold mb-5">Sign into your account</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered mb-3"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control relative justify-end items-end">
                <p>
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="input input-bordered w-80"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </p>
                <p
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 bottom-4"
                >
                  {showPassword ? (
                    <FaEye className="size-5" />
                  ) : (
                    <FaEyeSlash className="size-5" />
                  )}
                </p>
              </div>
              <div className="form-control mt-3">
                <SocialLogin />
              </div>
            </form>
            <label className="label">
              <p>Do not have an account?</p>
              <Link to="/register" className="text-[#FC8902] font-bold">
                Register
              </Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
