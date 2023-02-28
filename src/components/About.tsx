import React from "react";
import SectionTitle from "./common/SectionTitle";
import { Element } from "react-scroll";

function About() {
	return (
		<Element
			name="about"
			className="w-full h-screen px-4 py-8 bg-gradient-to-b from-gray-800 to-black text-white"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full">
				<SectionTitle title="About" />
				<p className="text-xl">
					I am a Front-End Engineer with more than 6 years of working
					experience, capable of transforming UI/UX designs into responsive and
					well-structured web applications. I love to work in web projects using
					React, Material-UI, and GraphQL.
				</p>
			</div>
		</Element>
	);
}

export default About;
