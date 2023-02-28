import React from "react";

type SectionTitleProps = {
	title: string;
	children?: React.ReactNode;
};

function SectionTitle({ title, children }: SectionTitleProps) {
	return (
		<div className="pb-8">
			<p className="text-4xl font-bold inline border-b-4 border-gray-500">
				{title}
			</p>
			{children}
		</div>
	);
}

export default SectionTitle;
