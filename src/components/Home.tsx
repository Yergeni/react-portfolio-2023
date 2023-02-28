import ProfileImage from "../assets/profile.png";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Element, Link } from "react-scroll";

function Home() {
	return (
		<Element
			name="home"
			className="w-full h-screen pb-8 bg-gradient-to-b from-black via-black to-gray-800"
		>
			<div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
				<div className="flex flex-col justify-center h-full px-4 md:px-8">
					<h2 className="text-4xl sm:text-7xl font-bold text-white">
						I'm Yergeni Cabranes
					</h2>
					<hr className="mt-4 border-t-1 bg-neutral-50 opacity-20" />
					<p className="text-gray-500 py-4 max-w-xl">
						I'm a Florida based{" "}
						<span className="font-bold">Front-End Engineer</span>. I work at
						REEF Technology Inc.
					</p>
					<div>
						{/* use the "group" class to match hover the icon from the button */}
						<Link to="portfolio" smooth className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
							Portfolio
							<span className="group-hover:rotate-90 duration-300">
								<IoMdArrowRoundForward size={18} className="ml-1" />
							</span>
						</Link>
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
		</Element>
	);
}

export default Home;
