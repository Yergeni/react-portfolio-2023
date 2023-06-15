import React from "react";
import SectionTitle from "./common/SectionTitle";
import { Element } from "react-scroll";

import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { LinkType } from "./common/types";

function About() {
	const links: LinkType[] = [
		{
			id: 1,
			child: (
				<>
					<FaLinkedin size={40} />
				</>
			),
			href: "https://www.linkedin.com/in/cabranesyergeni",
			style: "bg-blue-600",
		},
		{
			id: 2,
			child: (
				<>
					<HiOutlineMail size={40} />
				</>
			),
			href: "mailto:yergenis@gmail.com",
			style: "bg-gray-500",
		},
		{
			id: 3,
			child: (
				<>
					<FaGithub size={40} />
				</>
			),
			href: "https://github.com/Yergeni",
			style: "bg-slate-800",
		},
		{
			id: 4,
			child: (
				<>
					<BsFillPersonLinesFill size={40} />
				</>
			),
			href: "https://drive.google.com/file/d/174zrzAdQTZCc3Rxi8uXDlzU4RPN0Hj-A/view?usp=sharing",
			style: "bg-emerald-600",
		},
	];

	return (
		<Element
			name="about"
			className="w-full h-full px-4 py-8 bg-gradient-to-b from-gray-800 to-black text-white"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full">
				<SectionTitle title="About" />
				<p className="text-xl">
					I am a Front-End Engineer with more than 6 years of working
					experience, capable of transforming UI/UX designs into responsive and
					well-structured web applications. Building easy-to-use and
					user-friendly web interfaces is truly a passion of mine. 
					<br />
					I actively seek out new technologies and stay up to date on industry trends and
					advancements. This has allowed me to stay ahead of the curve and
					deliver exceptional work to all my employers, including those I have
					worked for on a project basis.
				</p>
				<h2 className="pt-8 pb-4 text-2xl">Contact Details</h2>
				<ul style={{ listStyleType: "circle" }} className="pl-4">
					<li>USA. Naples, FL,</li>
					<li>+1 786 520 0036</li>
					<li>yergenis@gmail.com</li>
				</ul>
				<div className="flex flex-row items-center pt-8 mx-auto space-x-4 lg:hidden">
					{links.map(({ id, child, href, style }) => (
						<a
							key={id}
							href={href}
							className={`flex justify-center items-center p-3 rounded-md ${style} hover:scale-105 duration-200`}
							rel="noreferrer"
							target="_blank"
						>
							{child}
						</a>
					))}
				</div>
			</div>
		</Element>
	);
}

export default About;
