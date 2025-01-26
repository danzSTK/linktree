import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen w-full flex-col">
      <Link to={"/"}>
        <h1 className="mt-11 text-white mb-7 font-bold text-5xl">
          Dev<span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">Link</span>
        </h1>
      </Link>
    </div>
  );
};

export default Login;
