import { Element } from "react-scroll";
import SectionTitle from "components/common/SectionTitle";

import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import mui from "../assets/tech/mui.png";
import javascript from "../assets/tech/javascript.png";
import reactImage from "../assets/tech/react.png";
import graphql from "../assets/tech/graphql.png";
import github from "../assets/tech/github.png";
import tailwind from "../assets/tech/tailwind.png";
import node from "../assets/tech/node.png";

function Experience() {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-sky-500",
    },
    {
      id: 5,
      src: mui,
      title: "Material UI",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: node,
      title: "Node JS",
      style: "shadow-lime-400",
    },
  ];

	return (
		<Element
			name="experience"
			className="w-full h-full bg-gradient-to-b py-8 from-gray-800 to-black"
		>
			<div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
				<SectionTitle title="Experience">
					<p className="py-6">These are some technologies I've worked with</p>
				</SectionTitle>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
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
