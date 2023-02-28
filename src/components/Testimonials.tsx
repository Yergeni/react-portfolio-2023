import { Element } from "react-scroll";
import { FaLinkedin } from "react-icons/fa";
import QuoteIcon from "./common/QuoteIcon";
import SectionTitle from "./common/SectionTitle";

function Testimonials() {
	return (
		<Element
			name="testimonials"
			className="w-full h-screen bg-gradient-to-b py-8 from-black to-gray-800 text-white"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full">
				<SectionTitle title="Testimonials">
					<p className="py-6">Check out what coworkers said about me!</p>
				</SectionTitle>
				<div className="max-w-screen-lg mx-auto flex flex-col w-full h-full">
					<div className="md:mb-0">
						<div className="mb-6 flex justify-center">
							<img
								src="https://media.licdn.com/dms/image/C4E03AQFPGACeAoYvPw/profile-displayphoto-shrink_200_200/0/1581476270626?e=1682553600&v=beta&t=g_QMW36lD_amhCeyTlwt1CEd3rxQ2dxX2yaDe8UkU2o"
								className="w-32 rounded-full shadow-lg dark:shadow-black/30"
								alt="alejo"
							/>
						</div>
						<div className="flex justify-center">
							<h5 className="mb-4 text-xl font-semibold text-center">
								Alejandro Hernandez
							</h5>
							<a
								href="https://www.linkedin.com/in/al3j0/"
								target="_blank"
								rel="noreferrer"
                className="pl-2 text-white"
							>
								<FaLinkedin size={24}/>
							</a>
						</div>
						<h6 className="mb-4 text-lg font-semibold text-center">
							SRE at Capital One
						</h6>
						<p className="mb-4 text-lg italic text-center">
							<QuoteIcon />
							One of my best hiring decisions as a Tech Team Lead was hiring
							Yergeni. He is a capable software engineer, (working on a team or
							as a sole contributor) who focuses on delivering. I was amazed by
							his performance in fast-paced scenarios under pressure. Yergeni is
							able to learn new tech stacks in a short period of time and is
							capable of owning projects from whiteboard to release. I totally
							recommend Yergeni as he will be a great addition to any software
							company/team/project in need of good engineers with his skillset.
						</p>
					</div>
				</div>
			</div>
		</Element>
	);
}

export default Testimonials;
