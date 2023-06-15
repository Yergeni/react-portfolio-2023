import { Element } from "react-scroll";
import SectionTitle from "components/common/SectionTitle";

import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import mui from "../assets/tech/mui.png";
import javascript from "../assets/tech/javascript.png";
import react from "../assets/tech/react.png";
import typescript from "../assets/tech/typescript.png";
import graphql from "../assets/tech/graphql.png";
import github from "../assets/tech/github.png";
import tailwind from "../assets/tech/tailwind.png";
import mernStack from "../assets/tech/mernStack.png";
import node from "../assets/tech/node.png";

const techs = [
	{
		id: "html",
		src: html,
		title: "HTML",
		style: "shadow-orange-500",
	},
	{
		id: "css",
		src: css,
		title: "CSS",
		style: "shadow-blue-500",
	},
	{
		id: "js",
		src: javascript,
		title: "JavaScript",
		style: "shadow-yellow-500",
	},
	{
		id: "react",
		src: react,
		title: "React",
		style: "shadow-sky-500",
	},
	{
		id: "ts",
		src: typescript,
		title: "TypeScript",
		style: "shadow-blue-400",
	},
	{
		id: "mui",
		src: mui,
		title: "Material UI",
		style: "shadow-blue-600",
	},
	{
		id: "taildwindcss",
		src: tailwind,
		title: "Tailwind",
		style: "shadow-sky-400",
	},
	{
		id: "gql",
		src: graphql,
		title: "GraphQL",
		style: "shadow-pink-400",
	},
	{
		id: "git",
		src: github,
		title: "Git",
		style: "shadow-red-400",
	},
	{
		id: "node",
		src: node,
		title: "Node JS",
		style: "shadow-lime-400",
	},
	{
		id: "mern",
		src: mernStack,
		title: "MERN Stack",
		style: "shadow-orange-300",
	},
];

function Experience() {
	return (
		<Element
			name="experience"
			className="w-full h-full px-4 py-8 bg-gradient-to-b from-gray-800 to-black"
		>
			<div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
				<SectionTitle title="Experience">
					<p className="py-6">These are some technologies I've worked with</p>
				</SectionTitle>

				<div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8">
					{techs.map(({ id, src, title, style }) => (
						<div
							key={id}
							className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
						>
							<img src={src} alt="" className="w-20 mx-auto" />
							<p className="mt-4">{title}</p>
						</div>
					))}
				</div>
			</div>
		</Element>
	);
}

export default Experience;
