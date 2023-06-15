import About from "components/About";
import Home from "components/Home";
import Portfolio from "components/Portfolio";
import Experience from "components/Experience";
import SocialLinks from "components/SocialLinks";
import Testimonials from "components/Testimonials";
import Navbar from "components/Navbar";

function App() {
	return (
		<div className="flex flex-col justify-between">
			{/* Navbar */}
			<Navbar />

			<SocialLinks />
			<Home />
			<About />
			<Portfolio />
			<Experience />
			<Testimonials />
		</div>
	);
}

export default App;
