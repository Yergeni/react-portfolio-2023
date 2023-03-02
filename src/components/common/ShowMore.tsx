import { useState } from "react";
import QuoteIcon from "./QuoteIcon";

function ShowMore({ text }: { text: string }) {
	const [showMore, setShowMore] = useState(false);

	return (
		<>
			<p className="mb-4 text-lg italic text-center">
				<QuoteIcon />
				{showMore ? text : text.slice(text.length / 2)}
				<span
					className="inline-block rounded px-2 pt-2.5 pb-2 text-xs font-medium leading-normal text-blue-400 cursor-pointer"
					onClick={() => setShowMore((prev) => !prev)}
				>
					{showMore ? "show less" : "...show more"}
				</span>
			</p>
		</>
	);
}

export default ShowMore;
