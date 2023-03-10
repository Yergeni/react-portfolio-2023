import { Element } from "react-scroll";

import parkosWebpay from "assets/portfolio/parkosWebpay.png";
import covid19Tracker from "assets/portfolio/covid19Tracker.png";
import amazonClone from "assets/portfolio/amazonClone.png";
import crownStudy from "assets/portfolio/crownStudy.png";
import discordClone from "assets/portfolio/discordClone.png";
import netflixClone from "assets/portfolio/netflixClone.png";
import noProtectCMS from "assets/portfolio/noProtectCMS.png";
import noProtectWebPortal from "assets/portfolio/noProtectWebPortal.png";
import hangmanGame from "assets/portfolio/hangmanGame.png";

import SectionTitle from "./common/SectionTitle";

import { FaCode } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function Portfolio() {
	const projects = [
		{
			src: parkosWebpay,
			title: "ParkOS Web Pay",
			alt: "parkosWebpay",
			demoLink: "https://pay.reefparking.com/park/2278",
		},
		{
			src: noProtectCMS,
			title: "NO Protect CMS",
			alt: "noProtectCMS",
			demoLink: "https://support.nightowlsp.com/hc/en-us/articles/360057114614",
		},
		{
			src: noProtectWebPortal,
			title: "NO Protect Web Portal",
			alt: "noProtectWebPortal",
			demoLink: "https://web-protect-staging.nowlsp.com/landing/",
		},
		{
			src: crownStudy,
			title: "Crown Clothes",
			alt: "crownStudy",
			demoLink: "https://crwn-study.herokuapp.com/",
			codeLink: "https://github.com/Yergeni/crwn-clothing",
		},
		{
			src: hangmanGame,
			title: "Practice & Fun (Hangman)",
			alt: "hangman",
			demoLink: "https://yero-hangman.netlify.app/",
			codeLink: "https://github.com/Yergeni/hangman",
		},
		{
			src: covid19Tracker,
			title: "COVID 19 Tracker",
			alt: "covid19Tracker",
			demoLink: "https://covi19-tracker-a9817.web.app/",
			codeLink: "https://github.com/Yergeni/covi19-tracker",
		},
		{
			src: netflixClone,
			title: "Netflix Basic Clone",
			alt: "netflixClone",
			demoLink: "https://netflix-clone-e03a2.web.app/",
			codeLink: "https://github.com/Yergeni/basic-netflix-clone",
		},
		{
			src: discordClone,
			title: "Discord Basic Clone",
			alt: "discordClone",
			demoLink: "https://discord-clone-c3c10.web.app/",
			codeLink: "https://github.com/Yergeni/discord-clone",
		},
		{
			src: amazonClone,
			title: "Amazon Basic Clone",
			alt: "amazonClone",
			demoLink: "https://clone-4a1c8.web.app/",
			codeLink: "https://github.com/Yergeni/amazon-clone",
		},
	];

	return (
		<Element
			name="portfolio"
			className="w-full h-full bg-gradient-to-b px-4 py-8 from-black to-gray-800 text-white"
		>
			<div className="w-full h-full max-w-screen-lg p-4 mx-auto flex flex-col">
				<div>
					<SectionTitle title="Portfolio">
						<p className="py-6">Check out some of my work!</p>
					</SectionTitle>
				</div>

				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0">
					{projects.map(({ src, title, alt, demoLink, codeLink }) => (
						<div
							key={alt}
							className="shadow-md shadow-gray-600 rounded-lg flex flex-col justify-between"
						>
							<img
								src={src}
								alt={alt}
								className="rounded-md duration-200 hover:scale-105"
							/>
							<div>
								<div className="pt-4 pl-4">
									<h5 className="mb-2 text-xl font-medium leading-tight">
										{title}
									</h5>
								</div>
								<div className="flex items-center justify-center">
									{demoLink && (
										<a
											href={demoLink}
											className="flex items-center w1/2 px-6 py-2 m-4 duration-200 hover:scale-105"
											target="_blank"
											rel="noreferrer"
										>
											<FaEye className="mr-1" />
											Demo
										</a>
									)}
									{codeLink && (
										<a
											href={codeLink}
											className="flex items-center w1/2 px-6 py-2 m-4 duration-200 hover:scale-105"
											target="_blank"
											rel="noreferrer"
										>
											<FaCode className="mr-1" />
											Code
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</Element>
	);
}

export default Portfolio;
