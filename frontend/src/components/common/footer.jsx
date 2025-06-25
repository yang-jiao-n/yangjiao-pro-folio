import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";
import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					{/* <ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Home</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">About</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">Projects</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/articles">Articles</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">Contact</Link>
						</li>
					</ul> */}
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						<div className="footer-social-links">
							{INFO.main.email && (
								<a
									href={`mailto:${INFO.main.email}`}
									className="footer-social-link"
									title="Email"
								>
									<FontAwesomeIcon icon={faEnvelope} />
									<span>{INFO.main.email}</span>
								</a>
							)}
							{INFO.socials.linkedin && (
								<a
									href={INFO.socials.linkedin}
									target="_blank"
									rel="noreferrer"
									className="footer-social-link"
									title="LinkedIn"
								>
									<FontAwesomeIcon icon={faLinkedin} />
									<span>LinkedIn</span>
								</a>
							)}
							{INFO.socials.github && (
								<a
									href={INFO.socials.github}
									target="_blank"
									rel="noreferrer"
									className="footer-social-link"
									title="GitHub"
								>
									<FontAwesomeIcon icon={faGithub} />
									<span>GitHub</span>
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
