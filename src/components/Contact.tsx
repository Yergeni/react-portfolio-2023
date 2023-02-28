import { Element } from "react-scroll";
import SectionTitle from "./common/SectionTitle";

function Contact() {
	return (
		<Element
			name="contact"
			className="w-full h-screen bg-gradient-to-b py-8 from-gray-800 to-black text-white"
		>
			<div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
				<div>
					<SectionTitle title="Contact">
						<p className="py-6">
							Submit the form below to get in touch with me
						</p>
					</SectionTitle>
				</div>
				{/* Form */}
				<div>
					<form action="" className="flex flex-col w-full md:w-1/2">
						<input
							type="text"
							name="name"
							placeholder="Enter your email"
							className="p-2 bg-transparent border-2 rounded-md text-white focus: outline-none"
						/>
						<input
							type="email"
							name="email"
							placeholder="Enter your name"
							className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus: outline-none"
						/>
						<textarea
							name="message"
              placeholder="Enter your message"
							cols={30}
							rows={10}
							className="p-2 bg-transparent border-2 rounded-md text-white focus: outline-none"
						></textarea>

						<button
							type="submit"
							className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
						>
							Let's talk
						</button>
					</form>
				</div>
			</div>
		</Element>
	);
}

export default Contact;
