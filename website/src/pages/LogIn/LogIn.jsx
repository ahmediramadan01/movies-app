import { useState } from "react";
import { NavLink } from "react-router-dom";

function LogIn() {
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	return (
		<>
			<section className="text-gray-400 bg-gray-900 body-font">
				<form className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:m-auto w-full mt-10 md:mt-0">
					<div className="relative mb-4">
						<label htmlFor="email" className="leading-7 text-sm text-gray-400">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-cyan-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							data-ddg-input-type="identities.emailAddress"
							data-ddg-autofill="true"
						/>
					</div>
					<div className="relative mb-4">
						<label htmlFor="password" className="leading-7 text-sm text-gray-400">
							Password
						</label>
						<input
							type="password"
							id="password"
							name="password"
							className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-cyan-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							data-ddg-input-type="identities.emailAddress"
							data-ddg-autofill="true"
						/>
					</div>
					<button className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 py-2 px-8 focus:outline-none hover:bg-cyan-500 hover:text-black transition-all rounded text-lg">
						Log In
					</button>
					<p className="text-xs mt-3">
						Don't have an account?{" "}
						<NavLink to="/signup" className="mr-5 hover:text-cyan-400 transition-all">
							Sign Up
						</NavLink>
					</p>
				</form>
			</section>
		</>
	);
}

export default LogIn;
