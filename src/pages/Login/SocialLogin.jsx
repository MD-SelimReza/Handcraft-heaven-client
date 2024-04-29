import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { googleSignIn, githubSignIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleSocialLogIn = (socialProvider) => {
    socialProvider().then(() => {
      toast.success("user successfully login");
      navigate(location?.state ? location.state : "/");
    });
  };

  return (
    <>
      <button className="btn btn-primary">Login</button>
      <p className="text-center my-3">or login with</p>
      <div className="flex justify-center gap-10">
        <button
          onClick={() => handleSocialLogIn(googleSignIn)}
          className="btn border-2 border-[#FC8902]"
        >
          <FaGoogle className="text-[#34A853] size-5" />
        </button>
        <button
          onClick={() => handleSocialLogIn(githubSignIn)}
          className="btn border-2 border-[#FC8902]"
        >
          <FaGithub className="text-[#34A853] size-5" />
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
