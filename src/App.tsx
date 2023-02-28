import { useWindowSize } from "hooks";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

import About from "components/About";
import Home from "components/Home";
import Portfolio from "components/Portfolio";
import Experience from "components/Experience";
import SocialLinks from "components/SocialLinks";
import Testimonials from "components/Testimonials";

const LINKS = [
	{
		id: 1,
		link: "home",
	},
	{
		id: 2,
		link: "about",
	},
	{
		id: 3,
		link: "portfolio",
	},
	{
		id: 4,
		link: "experience",
	},
	{
		id: 5,
		link: "testimonials",
	},
	// {
	// 	id: 6,
	// 	link: "contact",
	// },
];

function App() {
	const { width } = useWindowSize();
	const [showNav, setShowNav] = useState(false);

	useEffect(() => {
		if (width && width > 768) {
			setShowNav(false);
		}
	}, [width]);

	return (
		<div className="flex flex-col justify-between">
			{/* Navbar */}
			<nav
				className={
					"flex md:justify-center justify-end items-center w-full h-20 md:bg-black text-white z-10 fixed"
				}
			>
				{/* Desktop menu */}
				<ul className="hidden md:flex">
					{LINKS.map(({ id, link }) => (
						<li
							key={id}
							className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200"
						>
							<Link
								to={link}
								smooth
								duration={500}
								spy
								activeClass="text-white font-bold"
							>
								{link}
							</Link>
						</li>
					))}
				</ul>
				{/* Mobile menu */}
				<button
					onClick={() => setShowNav((prev) => !prev)}
					className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
				>
					{showNav ? <FaTimes size={30} /> : <FaBars size={30} />}
				</button>

				{/* Mobile list of links */}
				{showNav && (
					<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
						{LINKS.map(({ id, link }) => (
							<li
								key={id}
								className="px-4 cursor-pointer capitalize py-6 text-4xl"
							>
								<Link
									to={link}
									smooth
									duration={500}
									spy
									activeClass="text-white font-bold"
									onClick={() => setShowNav((prev) => !prev)}
								>
									{link}
								</Link>
							</li>
						))}
					</ul>
				)}
			</nav>

			<SocialLinks />
			<Home />
			<About />
			<Portfolio />
			<Experience />
			<Testimonials />
		</div>
	);
}

export default App;

// import About from "components/About";
// import Home from "components/Home";
// import Navbar from "components/Navbar";
// import Portfolio from "components/Portfolio";
// import Experience from "components/Experience";
// import SocialLinks from "components/SocialLinks";
// import Testimonials from "components/Testimonials";

// function App() {
// 	return (
// 		<div className="flex flex-col justify-between">
// 			<Navbar />
//       <SocialLinks />
//       <Home />
// 			<About />
// 			<Portfolio />
// 			<Experience />
// 			<Testimonials />
// 			{/* <Contact /> */}
// 		</div>
// 	);
// }

// export default App;
