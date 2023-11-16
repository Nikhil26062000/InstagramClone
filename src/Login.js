import React, { useRef, useState } from "react";
import "./index.css";


const Login = () => {
  const [showSignIn, setShowSignIn] = useState(true);
  const username = useRef();
  const email = useRef();
  const password = useRef();

  const toggleForm = () => {
    setShowSignIn(!showSignIn);
  };

  const handleLogin = () => {
    console.log("Login button ");
  }

  const handleSignUp = () => {
    console.log("Sign Up button ");
    console.log(username.current.value);
    console.log(email.current.value);
    console.log(password.current.value);
  }


  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="bg-white border border-gray-300 rounded-lg p-8 shadow-md max-w-sm w-full">
        <h1 className="text-4xl font-semibold mb-6 text-center">Instagram</h1>
        <div className="flex mb-6">
          <button
            onClick={toggleForm}
            className={`text-blue-500 font-semibold focus:outline-none border-b-2 ${
              showSignIn ? "border-blue-500" : ""
            } px-4 py-2`}
          >
            Log In
          </button>
          <button
            onClick={toggleForm}
            className={`ml-4 font-semibold focus:outline-none px-4 py-2 ${
              showSignIn ? "" : "border-b-2 border-blue-500"
            }`}
          >
            Sign Up
          </button>
        </div>
        {showSignIn ? (
          <form onSubmit={(e)=>e.preventDefault()}>
            <input
              type="text"
              placeholder="Phone number, username, or email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              onClick={handleLogin}
              className="w-full bg-blue-500 text-white font-semibold rounded-md py-2 transition duration-300 hover:bg-blue-600"
            >
              Log In
            </button>
          </form>
        ) : (
          <form onSubmit={(e)=> e.preventDefault()}>
            <input
              ref={email}
              type="text"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
            />
            <input
              ref={username}
              type="text"
              placeholder="Username"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              onClick={handleSignUp}
              className="w-full bg-blue-500 text-white font-semibold rounded-md py-2 transition duration-300 hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
        )}
        <div className="mt-4 flex justify-center items-center">
          <span className="text-gray-500">
            {showSignIn ? "Don't have an account?" : "Already have an account?"}
          </span>
          <button
            onClick={toggleForm}
            className="text-blue-500 ml-1 font-semibold focus:outline-none hover:underline"
          >
            {showSignIn ? "Sign up" : "Log in"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
