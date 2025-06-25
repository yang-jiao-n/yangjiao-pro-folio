import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./nvidia.png"
								alt="nvidia"
								className="work-image"
							/>
							<div className="work-title">NVIDIA Corporation</div>
							<div className="work-subtitle">
								Staff Software Engineer (Enterprise AI)
							</div>
							<div className="work-duration">
								01/2024 – Present
							</div>
						</div>
						<div className="work">
							<img
								src="./walmart.png"
								alt="walmart"
								className="work-image"
							/>
							<div className="work-title">
								Walmart Global Tech
							</div>
							<div className="work-subtitle">
								Staff Software Engineer (Walmart Business)
							</div>
							<div className="work-duration">
								02/2023 – 12/2023
							</div>
						</div>

						<div className="work">
							<img
								src="./facebook.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Meta Inc.</div>
							<div className="work-subtitle">
								Senior Software Engineer (Search)
							</div>
							<div className="work-duration">
								01/2021 – 01/2023
							</div>
						</div>

						<div className="work">
							<img
								src="./samsung.png"
								alt="samsung"
								className="work-image"
							/>
							<div className="work-title">
								Samsung Research America
							</div>
							<div className="work-subtitle">
								Software Engineer (Performance)
							</div>
							<div className="work-duration">
								09/2015 – 06/2017
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
