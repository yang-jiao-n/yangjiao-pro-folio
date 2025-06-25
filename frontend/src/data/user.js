const INFO = {
	main: {
		title: "Full-Stack AI Engineer @ Nvidia",
		name: "Yang Jiao",
		email: "yangjiao54321@gmail.com",
		// logo: "../logo.png",
	},

	socials: {
		// twitter: "https://twitter.com/",
		github: "https://github.com/yangjiao2",
		linkedin: "https://linkedin.com/in/yjiao7",
		// instagram: "https://instagram.com/",
		// stackoverflow: "https://stackoverflow.com/",
	},

	homepage: {
		title: "Building User-Focused LLM-Powered Products | AI & Full-Stack",
		description:
			"My professional journey is deeply rooted in designing, developing, and optimizing large-scale, AI-driven, and full-stack software solutions for complex enterprise environments.  💙 Python · React · GraphQL · K8s",
	},

	about: {
		title: "I’m Yang Jiao.",
		description:
			"My core expertise lies in accelerating AI/LLM development and enhancing reliability. Beyond AI (earlier in my career), my knowledge spans comprehensive full-stack development, architecting scalable and robust distributed systems. I drive velocity and operational efficiency, consistently delivering meaningful impact. My ambition is to continue leading significant technology initiatives end-to-end, embodying a *boundaryless mindset* to solve critical customer problems and unblock teams",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	stories: {
		title: "Stories",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "LLM‑Powered Agentic Eval‑as‑a‑Service Platform",
			description: "Transforming LLM evaluation into a scalable, schema‑driven Evaluation as a Service, blending traditional metrics with LLM‑as‑a‑Judge and CI‑integrated diagnostics.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			details: "Architected a modular EaaS platform enabling schema‑driven rubrics (via JSON/YAML) and LLM‑as‑a‑Judge scoring to assess reasoning, factual accuracy, hallucination, and tool usage. Added OpenTelemetry tracing for full agent trajectories (prompts, tool calls, state changes). Integrated NeMo Evaluator API for batch and CI/CD runs, with dashboarding (Weave) and auto‑alerting on regression thresholds. Enabled evaluation-as-code that prevents subtle regressions pre-deployment, boosts developer confidence, and accelerates iterative model improvement, unifying evaluation with production workflows.",
			keywords: ["LLMOps", "Evaluation as a Service", "LLM‑as‑a‑Judge", "OpenTelemetry", "NeMo Evaluator", "CI/CD", "schema‑driven", "regression detection"]
		  },
		  {
			title: "GraphRAG for Incident Pattern Extraction",
			description: "Built a Graph‑augmented RAG pipeline in a hackathon to semantically detect and visualize incident patterns from support logs.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			details: "Created a Neo4j‑backed knowledge graph enriched by vector-indexed log chunks. Designed LLM prompts to extract entities, relationships, and causal chains. Enabled multi-hop queries like errors → services → root causes, combining semantic retrieval and graph algorithms to cluster similar incidents. Delivered a full pipeline within one weekend that accelerates triage, surfaces hidden failure modes, and reduces manual tagging effort. The project showcased how GraphRAG can bring structure and clarity to unstructured operational data.",
			keywords: ["GraphRAG", "Neo4j", "RAG", "LLM", "semantic search", "incident analysis", "hackathon", "root‑cause"]
		  },
		  {
			title: "AI Healthcare Prototype with NVIDIA Tokio Avatar",
			description: "Designed a voice/text avatar using LLMs and Nvidia Tokio to simulate virtual patient triage during a healthcare hackathon.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			details: "Developed a patient‑facing avatar combining Nvidia Tokio’s conversational interface and LLM prompting to interpret symptoms, ask clarifying questions, and log structured medical histories. Integrated voice‑to‑text and backend medical API lookups. Included confidence scoring and fallback options for uncertain responses. Built interacting UI mockups and backend flows over a weekend to demonstrate empathetic virtual triage, reducing clinician load and enhancing engagement. The prototype showed promise for remote patient engagement and structured symptom collection.",
			keywords: ["LLM", "NVIDIA Tokio", "avatar", "healthcare", "voice UI", "hackathon", "virtual triage", "multimodal"]
		  },
		  {
			title: "Seamless REST‑to‑GraphQL Migration",
			description: "Led the migration of a legacy REST API to GraphQL, enhancing efficiency, performance, and schema evolution in CI workflows.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			details: "Engineered and executed a phased migration from REST to GraphQL for an analytics dashboard. Reverse‑engineered existing APIs, designed a GraphQL schema with nested queries and pagination, and implemented resolvers in Node.js/TypeScript. Achieved feature parity while reducing payload size by 60% and improving load times by 45%. Added automated schema validation and CI/CD integration to support future evolution. This migration improved client‑side efficiency, increased developer velocity, and set up a maintainable API framework for future features.",
			keywords: ["GraphQL", "REST migration", "Node.js", "TypeScript", "CI/CD", "API performance", "schema evolution", "full‑stack"]
		  },
		  {
			title: "Supply‑Chain Tree‑Search Web Portal",
			description: "Built a performant portal to explore and visualize supply‑chain hierarchies, aiding root‑cause analysis and operational insights.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			details: "Developed a full‑stack React and GraphQL portal with Redis-powered backend to display vendor, product, and order hierarchies as interactive trees. Implemented search, filtering, expand/collapse nodes, and inline detail views. Optimized performance via batching, pagination, and caching. The UI lets supply‑chain managers trace dependencies, diagnose bottlenecks, and resolve issues efficiently. This tool significantly boosted operational visibility and enabled proactive incident resolution in procurement workflows.",
			keywords: ["React", "GraphQL", "Redis", "supply‑chain", "tree search", "performance", "data visualization", "full‑stack"]
		  }		  
	],
};

export default INFO;
