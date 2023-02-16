import React from "react";
import ProfileImage from "../assets/profile.png";
import { IoMdArrowRoundForward } from "react-icons/io";

function Home() {
	return (
		<div
			id="home"
			className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
		>
			<div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
				<div className="flex flex-col justify-center h-full px-4 md:px-8">
					<h2 className="text-4xl sm:text-7xl font-bold text-white">
						I'm a Front End Engineer
					</h2>
					<p className="text-gray-500 py-4 max-w-xl">
						I am a Front-End Engineer with more than 6 years of working
						experience, capable of transforming UI/UX designs into responsive
						and well-structured web applications. I love to work in web projects
						using React, Material-UI, and GraphQL.
					</p>
					<div>
            {/* use the "group" class to match hover the icon from the button */}
						<button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
							Portfolio
							<span className="group-hover:rotate-90 duration-300">
								<IoMdArrowRoundForward size={18} className="ml-1" />
							</span>
						</button>
					</div>
				</div>
				{/* Image */}
				<div>
					<img
						src={ProfileImage}
						alt="profile"
						className="rounded-2xl mx-auto max-w-xs"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
