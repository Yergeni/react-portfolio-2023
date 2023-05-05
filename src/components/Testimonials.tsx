import { Element } from "react-scroll";
import { FaLinkedin } from "react-icons/fa";

import ShowMore from "./common/ShowMore";
import SectionTitle from "./common/SectionTitle";

type TestimonialType = {
	id: number;
	image: string;
	author: string;
	linkdin: string;
	position: string;
	testimonial: string;
};

const testimonials: TestimonialType[] = [
	{
		id: 1,
		image:
			"https://media.licdn.com/dms/image/C4E03AQFPGACeAoYvPw/profile-displayphoto-shrink_200_200/0/1581476270626?e=1687996800&v=beta&t=lLKSGZiJNSfVs5Qw3hPHGmGZhbiP-6fLblml5wLJNAw",
		author: "Alejandro Hernandez",
		linkdin: "https://www.linkedin.com/in/al3j0/",
		position: "SRE at Capital One",
		testimonial: `One of my best hiring decisions as a Tech Team Lead was hiring
		Yergeni. He is a capable software engineer, (working on a team or
		as a sole contributor) who focuses on delivering. I was amazed by
		his performance in fast-paced scenarios under pressure. Yergeni is
		able to learn new tech stacks in a short period of time and is
		capable of owning projects from whiteboard to release. I totally
		recommend Yergeni as he will be a great addition to any software
		company/team/project in need of good engineers with his skillset.`,
	},
	{
		id: 2,
		image:
			"https://media.licdn.com/dms/image/C5603AQHlzJMF9_b-3g/profile-displayphoto-shrink_200_200/0/1656183665870?e=1688601600&v=beta&t=Lb2xE5O7o_oUm6i7G1gdZHIgXpxJqMDWCE2_2loLD08",
		author: "Paola Mancia",
		linkdin: "https://www.linkedin.com/in/paolamancia",
		position: "Web Architect at Applaudo",
		testimonial: `I had the privilege of working alongside Yergeni. His technical frontend skills in React, TypeScript, SCSS, and GraphQL, as well as his soft skills, were key to the success of our projects.
		He is a natural problem-solver, team player and leader. He has a positive attitude, great communication skills, and a willingness to go above and beyond to meet project requirements. 
		I highly recommend Yergeni, as he would be a valuable addition to any engineering team looking for exceptional talent.`,
	},
	{
		id: 3,
		image:
			"https://media.licdn.com/dms/image/C5603AQHYVMt4S9vhmw/profile-displayphoto-shrink_200_200/0/1607713471091?e=1688601600&v=beta&t=9eAsnlrIWVTksVprmN09gC9eluigMGanShniBvlSh9M",
		author: "Brian Wong",
		linkdin: "https://www.linkedin.com/in/brianwongcpa/",
		position: "Product Manager at REEF",
		testimonial: `I've been working with Yergeni across two different platform teams as his partner in Product. Yergeni is a capable and perceptive software engineer who always seems to ask the right questions and is thorough in addressing gaps. We've worked together on one of the more complicated workflows that dealt with Pricing. Given all the possible variations and complex blend of use cases, Yergeni was able to stay focused on the delivery of a comprehensive product and bring new perspectives and ideas to the tables during design and technical grooming. Yergeni has also advocated and contributed much to our component library which is an important asset to our platform. Without any doubt, I would wholeheartedly recommend Yergeni as a great addition to any team looking for strong expertise in the field of his craft.`,
	},
];

function Testimonials() {
	return (
		<Element
			name="testimonials"
			className="w-full h-full bg-gradient-to-b py-8 from-black to-gray-800 text-white"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full">
				<SectionTitle title="Testimonials">
					<p className="py-6">Check out what coworkers said about me!</p>
				</SectionTitle>
				<div className="max-w-screen-lg mx-auto flex flex-col w-full h-full">
					<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 content-start">
						{testimonials.map(
							({ id, author, image, linkdin, position, testimonial }) => (
								<div
									key={id}
									className="mb-6 flex flex-col gap-2"
									// className="mb-6 flex flex-col justify-center gap-2"
								>
									<img
										src={image}
										className="w-32 rounded-full mx-auto"
										alt={author}
									/>
									<div className="flex justify-center">
										<h5 className="mb-4 text-xl font-semibold text-center">
											{author}
										</h5>
										<a
											href={linkdin}
											target="_blank"
											rel="noreferrer"
											className="pl-2 text-white"
										>
											<FaLinkedin size={24} />
										</a>
									</div>
									<h6 className="mb-4 text-lg font-semibold text-center">
										{position}
									</h6>
									<ShowMore text={testimonial} />
								</div>
							)
						)}
					</div>
				</div>
			</div>
		</Element>
	);
}

export default Testimonials;
