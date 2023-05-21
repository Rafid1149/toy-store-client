import  { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {  FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/Authprovider";
import useTitle from "../../Hook/useTitle";

const Login = () => {
  useTitle('Login');
  const location = useLocation();
  const from = location.state?.from || "/";
  const { signIn, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
 
  return (
    <div className=" mx-auto mt-10">
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-2xl font-bold text-center leading-tight tracking-tight text-gray-950 md:text-2xl">
                Sign in to your account 
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-gray-500 ">Remember me</label>
                    </div>
                  </div>
                  <Link
                    to=""
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
                <p className="text-sm font-normal text-opacity-100 dark:text-gray-400">
                  Do not have an account yet?{" "}
                  <Link
                    to="/register"
                    className=" text-blue-950 hover:underline font-bold dark:text-primary-500"
                  >
                    Register Now
                  </Link>
                </p>
              </form>
              <div className="mx-auto">
                <button
                  onClick={handleGoogleLogin}
                  type="button"
                  className="text-white btn-block bg-gradient-to-r from-cyan-500 to-blue-500 text-center hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                >
                  {/* Login with google button  */}
                  <FaGoogle className="inline "></FaGoogle> Login with Google
                </button>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
