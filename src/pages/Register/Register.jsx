import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, profileUpdate } = useContext(AuthContext);
  const from = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    const { email, password, image, fullName } = data;

    if (!/^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{6,}$/.test(password)) {
      toast.error(
        "password must be have at least 6 characters, a capital & a small letter"
      );
      return;
    }

    createUser(email, password).then(() => {
      profileUpdate(fullName, image).then(() => {
        toast.success("user successfully register");
        navigate(from?.state ? from.state : "/");
        location.reload();
      });
    });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="card-body w-96"
          >
            <h2 className="text-3xl font-bold mb-5">Create an account</h2>
            <div className="form-control">
              <input
                type="text"
                placeholder="Full name"
                className="input input-bordered"
                {...register("fullName", { required: true })}
              />
              {errors.fullName && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="image url"
                className="input input-bordered"
                {...register("image")}
              />
            </div>
            <div className="form-control relative justify-center items-end">
              <p>
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
                className="absolute right-4"
              >
                {showPassword ? (
                  <FaEye className="size-5" />
                ) : (
                  <FaEyeSlash className="size-5" />
                )}
              </p>
            </div>
            <div className="form-control">
              <label>
                <input type="checkbox" required /> I agree with
                <Link> terms and conditions</Link>
              </label>
            </div>
            <div className="form-control">
              <button className="btn btn-primary">Register</button>
            </div>
            <label className="label">
              <p>Already have an account?</p>
              <Link to="/login" className="text-[#FC8902] font-bold">
                Login
              </Link>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
