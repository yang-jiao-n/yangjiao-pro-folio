import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faLinkedin,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	return (
		<div className="socials">
			{INFO.socials.twitter && (
				<div className="social">
					<a
						href={INFO.socials.twitter}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faTwitter}
								className="social-icon"
							/>
						</div>
						<div className="social-text">Follow on Twitter</div>
					</a>
				</div>
			)}

			{INFO.socials.github && (
				<div className="social">
					<a
						href={INFO.socials.github}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faGithub}
								className="social-icon"
							/>
						</div>
						<div className="social-text">GitHub</div>
					</a>
				</div>
			)}

			{INFO.socials.linkedin && (
				<div className="social">
					<a
						href={INFO.socials.linkedin}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faLinkedin}
								className="social-icon"
							/>
						</div>
						<div className="social-text">LinkedIn</div>
					</a>
				</div>
			)}

			{INFO.socials.instagram && (
				<div className="social">
					<a
						href={INFO.socials.instagram}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faInstagram}
								className="social-icon"
							/>
						</div>
						<div className="social-text">Follow on Instagram</div>
					</a>
				</div>
			)}

			{/* {INFO.main.email && (
				<div className="email">
					<div className="email-wrapper">
						<a
							href={`mailto:${INFO.main.email}`}
							target="_blank"
							rel="noreferrer"
						>
							<div className="social-icon">
								<FontAwesomeIcon icon={faEnvelope} />
							</div>

							<div className="social-text">{INFO.main.email}</div>
						</a>
					</div>
				</div>
			)} */}
		</div>
	);
};

export default Socials;
