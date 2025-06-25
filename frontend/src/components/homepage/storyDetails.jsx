import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import "./styles/storyDetails.css";

const StoryDetails = ({ story }) => {
	if (!story) {
		return (
			<div className="story-details-placeholder">
				<Card
					icon={faStar}
					title="Professional Stories"
					body={
						<div className="story-details-placeholder-content">
							<p>
								Select a story from the left to view detailed
								information about my professional experiences
								and achievements.
							</p>
						</div>
					}
				/>
			</div>
		);
	}

	return (
		<div className="story-details">
			<Card
				icon={faStar}
				title=""
				body={
					<div className="story-details-content">
						<h3 className="story-details-title">{story.title}</h3>
						<p className="story-details-description">
							{story.description}
						</p>
						<div className="story-details-section">
							<h4>Details</h4>
							<p className="story-details-text">
								{story.details}
							</p>
						</div>
						<div className="story-details-section">
							<h4>Key Technologies & Skills</h4>
							<div className="story-details-keywords">
								{story.keywords.map((keyword, index) => (
									<span
										key={index}
										className="story-details-keyword"
									>
										{keyword}
									</span>
								))}
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default StoryDetails;
