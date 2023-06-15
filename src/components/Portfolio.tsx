import { Element } from "react-scroll";

import parkosWebpay from "assets/portfolio/parkosWebpay.png";
import noProtectCMS from "assets/portfolio/noProtectCMS.png";
import noProtectWebPortal from "assets/portfolio/noProtectWebPortal.png";
import mernAuthBoilerplate from "assets/portfolio/mernAuthBoilerplate.png";
import twitterClone from "assets/portfolio/twitterClone.png";
// import discordClone from "assets/portfolio/discordClone.png";
import crownStudy from "assets/portfolio/crownStudy.png";
import hangmanGame from "assets/portfolio/hangmanGame.png";
import notes from "assets/portfolio/notes.png";
import covid19Tracker from "assets/portfolio/covid19Tracker.png";
import lotrInfo from "assets/portfolio/lotrInfo.png";
import coduxMovies from "assets/portfolio/coduxMovies.png";
import netflixClone from "assets/portfolio/netflixClone.png";
import amazonClone from "assets/portfolio/amazonClone.png";

import SectionTitle from "./common/SectionTitle";

import { FaCode } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const projects = [
	{
		src: parkosWebpay,
		title: "ParkOS Web Pay",
		alt: "Parkos Webpay",
		demoLink: "https://pay.reefparking.com",
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
		alt: "NO Protect Web Portal",
		demoLink: "https://web-protect-staging.nowlsp.com/landing/",
	},
	{
		src: mernAuthBoilerplate,
		title: "MERN Auth Boilerplate",
		alt: "MERN Auth",
		demoLink: "https://yero-mern-auth-boilerplate.netlify.app/",
		codeLink: "https://github.com/Yergeni/mern-auth-boilerplate",
	},
	{
		src: twitterClone,
		title: "Twitter Clone w/ T3 Stack",
		alt: "Twitter Clone",
		demoLink: "https://yero-twitter-clone.netlify.app/",
		codeLink: "https://github.com/Yergeni/twitter-clone",
	},
	// {
	// 	src: discordClone,
	// 	title: "Basic Discord Clone",
	// 	alt: "Discord Clone",
	// 	demoLink: "https://yero-discord-clone.netlify.app/",
	// 	codeLink: "https://github.com/Yergeni/discord-clone",
	// },
	{
		src: crownStudy,
		title: "Crown Clothes",
		alt: "Crown Study",
		demoLink: "https://crwn-study.herokuapp.com/",
		codeLink: "https://github.com/Yergeni/crwn-clothing",
	},
	{
		src: hangmanGame,
		title: "Practice & Fun (Hangman)",
		alt: "Hangman",
		demoLink: "https://yero-hangman.netlify.app/",
		codeLink: "https://github.com/Yergeni/hangman",
	},
	{
		src: notes,
		title: "Practice CRUD operations",
		alt: "Notes",
		demoLink: "https://yero-notes.netlify.app/",
		codeLink: "https://github.com/Yergeni/notes-with-tags",
	},
	{
		src: covid19Tracker,
		title: "COVID 19 Tracker",
		alt: "Covid19 Tracker",
		demoLink: "https://covi19-tracker-a9817.web.app/",
		codeLink: "https://github.com/Yergeni/covi19-tracker",
	},
	{
		src: lotrInfo,
		title: "LOTR Info",
		alt: "LOTR Info",
		demoLink: "https://yero-lotr-info.netlify.app/",
		codeLink: "https://github.com/Yergeni/liblab_project",
	},
	{
		src: coduxMovies,
		title: "Codux Movies",
		alt: "Codux Movies",
		demoLink: "https://yero-codux-movies.netlify.app/",
		codeLink: "https://github.com/Yergeni/codux-movies",
	},
	{
		src: netflixClone,
		title: "Basic Netflix Clone",
		alt: "Netflix Clone",
		demoLink: "https://netflix-clone-e03a2.web.app/",
		codeLink: "https://github.com/Yergeni/basic-netflix-clone",
	},
	{
		src: amazonClone,
		title: "Basic Amazon Clone",
		alt: "amazonClone",
		demoLink: "https://clone-4a1c8.web.app/",
		codeLink: "https://github.com/Yergeni/amazon-clone",
	},
];

function Portfolio() {

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
