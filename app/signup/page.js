import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center my-4">
        <h1>Hello! Please Signup to buy things</h1>
        <span>www.mafiashop.com</span>
      </div>

      {/* Input */}

      <form action="" className="px-2 mt-10">
        <div className="space-y-6">
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-gray-600 font-medium">
              UserName
            </label>
            <input
              type="email"
              required
              placeholder="rohit@gmail.com"
              className="h-10 border-gray-300 border-2 pl-2 rounded-sm"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-gray-600 font-medium">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="123456..."
              className="h-10 border-gray-300 border-2 pl-2 rounded-sm"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-gray-600 font-medium">
              FullName
            </label>
            <input
              type="text"
              required
              placeholder="Rohit Patel"
              className="h-10 border-gray-300 border-2 pl-2 rounded-sm"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-gray-600 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              required
              placeholder="9073286486"
              className="h-10 border-gray-300 border-2 pl-2 rounded-sm"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-gray-600 font-medium">
              Adreess
            </label>
            <input
              type="text"
              required
              placeholder="Barahi kala newada varanasi UP"
              className="h-10 border-gray-300 border-2 pl-2 rounded-sm"
            />
          </div>
        </div>

        {/* button and already account */}

        <div className="mt-10 flex items-center flex-col">
          <button className="bg-red-500 w-full p-2">SignUp</button>
          <div className="mt-2">
            Already have an account ?
            <Link href="/signin" className="text-blue-700 font-bold ml-2">
              SignIn
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
