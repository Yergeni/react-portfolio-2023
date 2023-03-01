import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { LinkType } from "./common/types";

function SocialLinks() {
	const links: LinkType[] = [
		{
			id: 1,
			child: (
				<>
					LinkedIn <FaLinkedin size={30} />
				</>
			),
			href: "https://www.linkedin.com/in/cabranesyergeni",
			style: "rounded-tr-md bg-blue-600",
		},
		{
			id: 2,
			child: (
				<>
					Mail <HiOutlineMail size={30} />
				</>
			),
			href: "mailto:yergenis@gmail.com",
			style: "bg-gray-500"
		},
		{
			id: 3,
			child: (
				<>
					Resume <BsFillPersonLinesFill size={30} />
				</>
			),
			href: "https://drive.google.com/file/d/174zrzAdQTZCc3Rxi8uXDlzU4RPN0Hj-A/view?usp=sharing",
			style: "rounded-br-md bg-emerald-600",
		},
	];

	return (
		<div className="hidden lg:flex flex-col top-[45%] left-0 fixed z-40">
			<ul>
				{links.map(({ id, child, href, style }) => (
					<li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] ${style} hover:ml-[-5px] hover:rounded-md duration-300`}>
						<a
							href={href}
							target="_blank"
							className="flex justify-between items-center w-full text-white"
							rel="noreferrer"
						>
							{child}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

export default SocialLinks;
