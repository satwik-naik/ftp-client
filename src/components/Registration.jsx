import React, { useState } from "react";

const RegistrationPage = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const clearInput = () => {
    let inputs = document.getElementsByClassName("clearIN");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here

    if (password === confirmPassword) {
      console.log(userName + " " + email + " " + password);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userName,
          email,
          password,
        }),
      }).then(() => {
        alert("Registration Successful");
        localStorage.setItem("email", email);
        localStorage.setItem("userName", userName);

        window.location.href = "http://localhost:3000/home";
      });
    } else {
      alert("Password not match with confirm password");
    }
    clearInput();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 ">
      <div className="h-[45rem] w-[40rem] px-8 py-6 text-left bg-white shadow-lg rounded-lg flex  flex-col justify-center">
        <h3 className="text-2xl font-bold text-center">Register</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label className="block" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              placeholder="Username"
              className="clearIN w-full px-4 py-2 mt-2  rounded-md focus:outline-none focus:ring-1 border-2 border-blue-600"
              name="username"
              id="username"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              required
            />
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="clearIN w-full px-4 py-2 mt-2 rounded-md focus:outline-none focus:ring-1 border-2 border-blue-600"
              name="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="clearIN w-full px-4 py-2 mt-2 rounded-md focus:outline-none focus:ring-1 border-2 border-blue-600"
              name="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="clearIN w-full px-4 py-2 mt-2  rounded-md focus:outline-none focus:ring-1 border-2 border-blue-600"
              name="confirmPassword"
              id="confirmPassword"
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              required
            />
          </div>
          <div className="flex items-baseline justify-between my-4">
            <button className="px-8 py-2 mt-4 text-white bg-black rounded-lg hover:bg-red-500">
              Register
            </button>
            <a href="/login" className="text-sm text-blue-700 hover:underline">
              already registered
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
