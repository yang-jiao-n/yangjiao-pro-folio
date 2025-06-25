import React, { useState } from "react";
import { chatCompletion } from "../../services/chatApi";
import "./styles/chatWidget.css";

const ChatWidget = () => {
	const [open, setOpen] = useState(false);
	const [input, setInput] = useState("");
	const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(false);

	const handleSend = async (e) => {
		e.preventDefault();
		if (!input.trim()) return;
		const userMsg = { role: "user", content: input };
		setMessages((msgs) => [...msgs, userMsg]);
		setInput("");
		setLoading(true);
		try {
			const response = await chatCompletion(input);
			console.log("response", response);
			setMessages((msgs) => [
				...msgs,
				{ role: "assistant", content: response },
			]);
		} catch (err) {
			setMessages((msgs) => [
				...msgs,
				{ role: "assistant", content: "Sorry, something went wrong." },
			]);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className={`chat-widget-container${open ? " open" : ""}`}>
			{!open && (
				<button
					className="chat-bubble"
					onClick={() => setOpen(true)}
					aria-label="Open chat"
				>
					<svg width="28" height="28" viewBox="0 0 24 24" fill="none">
						<circle
							cx="12"
							cy="12"
							r="12"
							fill="var(--primary-color)"
						/>
						<path
							d="M7 10h10M7 14h6"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
						/>
					</svg>
				</button>
			)}
			{open && (
				<div className="chatbox">
					<div className="chatbox-header">
						<span>Ask Me Anything</span>
						<button
							className="chatbox-close"
							onClick={() => setOpen(false)}
							aria-label="Close chat"
						>
							×
						</button>
					</div>
					<div className="chatbox-messages">
						{messages.length === 0 && (
							<div className="chatbox-placeholder">
								How can I help you today?
							</div>
						)}
						{messages.map((msg, idx) => (
							<div
								key={idx}
								className={`chatbox-message ${msg.role}`}
							>
								{msg.content}
							</div>
						))}
						{loading && (
							<div className="chatbox-message assistant loading">
								Thinking…
							</div>
						)}
					</div>
					<form className="chatbox-input-row" onSubmit={handleSend}>
						<input
							className="chatbox-input"
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							placeholder="Type your question..."
							disabled={loading}
							autoFocus
						/>
						<button
							className="chatbox-send"
							type="submit"
							disabled={loading || !input.trim()}
						>
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
							>
								<path
									d="M2 10L18 3L11 18L9 11L2 10Z"
									fill="var(--primary-color)"
								/>
							</svg>
						</button>
					</form>
				</div>
			)}
		</div>
	);
};

export default ChatWidget;
