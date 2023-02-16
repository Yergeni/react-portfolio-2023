
import { useState, useEffect } from "react";
import { useWindowSize } from "hooks";
import { FaBars, FaTimes } from "react-icons/fa";

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
	{
		id: 6,
		link: "contact",
	},
];

function Navbar() {
	const { width } = useWindowSize();
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    if (width && width > 768) {
      setShowNav(false);
    }
  }, [width]);

	return (
		<div className="flex md:justify-center justify-end items-center w-full h-20 text-white bg-black">
			{/* Desktop menu */}
			<ul className="hidden md:flex">
				{LINKS.map(({ id, link }) => (
					<li
						key={id}
						className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200"
					>
						{link}
					</li>
				))}
			</ul>

			{/* Mobile menu */}
			<div
				onClick={() => setShowNav(!showNav)}
				className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
			>
				{showNav ? <FaTimes size={30} /> : <FaBars size={30} />}
			</div>

			{/* Mobile list of links */}
			{showNav && (
				<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
					{LINKS.map(({ id, link }) => (
						<li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
							{link}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default Navbar;
