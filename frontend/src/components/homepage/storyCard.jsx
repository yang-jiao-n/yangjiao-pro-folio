import React from "react";
import "./styles/storyCard.css";

const StoryCard = ({ story, isSelected, onClick }) => {
	return (
		<div
			className={`story-card ${isSelected ? "story-card-selected" : ""}`}
			onClick={onClick}
		>
			<div className="story-card-content">
				<h3 className="story-card-title">{story.title}</h3>
				<p className="story-card-description">{story.description}</p>
				<div className="story-card-keywords">
					{story.keywords.map((keyword, index) => (
						<span key={index} className="story-card-keyword">
							{keyword}
						</span>
					))}
				</div>
			</div>
			<div className="story-card-arrow">
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
						clipRule="evenodd"
					/>
				</svg>
			</div>
		</div>
	);
};

export default StoryCard;
