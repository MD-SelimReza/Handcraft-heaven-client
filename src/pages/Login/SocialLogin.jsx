import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  const { googleSignIn, githubLogIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleSocialLogIn = (socialProvider) => {
    socialProvider().then(() => {
      alert("user successfully login");
      navigate(location?.state ? location.state : "/");
    });
  };

  return (
    <>
      <button className="btn btn-primary">Login</button>
      <p className="text-center my-3">or</p>
      <button
        onClick={() => handleSocialLogIn(googleSignIn)}
        className="btn btn-outline text-[#FC8902] mb-3"
      >
        <FaGoogle className=" text-[#FC8902]" />
        <span className="text-white">Login with Google</span>
      </button>
      <button
        onClick={() => handleSocialLogIn(githubLogIn)}
        className="btn btn-primary"
      >
        <FaGithub />
        Login with Github
      </button>
    </>
  );
};

export default SocialLogin;
