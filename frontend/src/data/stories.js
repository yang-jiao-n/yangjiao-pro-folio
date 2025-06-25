const Stories = [
	{
        "title": "High Ownership & Hands‑On DevOps Problem Solver",
        "description": "Took end-to-end responsibility for GPU-powered model-serving infra on Kubernetes—designing telemetry, autoscaling, and deployment optimizations.",
        "details": "Identified latency and incident spikes in a legacy, monolithic model-serving setup. Installed OpenTelemetry and Grafana dashboards to monitor GPU metrics and latency. Refactored inference services into containerized, batched workloads using Triton Inference. Implemented GPU node affinity, warm pods, and Helm-based autoscaling. Enhanced CI/CD with Argo and GitLab CI to enable blue-green deploys and automated rollbacks based on latency thresholds.",
        "keywords": ["DevOps", "Kubernetes", "GPU autoscaling", "Helm", "Triton", "Grafana", "OpenTelemetry", "CI/CD"]
      }
      ,

      {
        "title": "Technical Lead in LLM Evaluation & Scaling",
        "description": "Pioneered a scalable Evaluation-as-a-Service (EaaS) framework for LLM-driven agent and RAG pipelines, enabling structured, semantic-aware assessments that outperform traditional metrics.",
        "details": "Identified deficiencies in traditional evaluation (e.g., BLEU, ROUGE) for multi-turn, tool-augmented LLM workflows. Architected a modular EaaS platform with custom rubrics (via JSON/YAML) to evaluate reasoning, factual accuracy, hallucination, and tool interactions. Implemented trace instrumentation using OpenTelemetry to capture prompts, tool calls, and agent state transitions. Built NeMo Evaluator-as-a-Service for batch and CI/CD use, with dashboarding (Weave) and regression alerts. Enabled schema‑driven LLM-as‑a‑Judge scoring pipelines, integrated structured diagnostics and CI gating. Result: rapid regression detection, actionable failure insights, and model debugging—dramatically improving evaluation rigor and developer trust.",
        "keywords": ["LLMOps", "EaaS", "LLM-as-a-Judge", "OpenTelemetry", "NeMo Evaluator", "CI/CD gating", "schema-driven evaluation", "regression detection"]
      },

      {
        "title": "Influential Collaboration on NeMo Microservices (Customer‑0)",
        "description": "Led architecture shift from custom to NeMo microservices, coordinating cross-team and external collaboration to save time and cost.",
        "details": "Recognized duplication in digesting, vector search, and fine‑tuning logic. Built demo using NeMo Retriever/Evaluator with LangChain, comparing latency, cost, and accuracy. Presented a case showing 3× faster time-to-market and 60% infra cost savings. Engaged NeMo team via PRs, issues, and brown-bag sessions. Rolled out microservices incrementally—vector store first—building internal trust.",
        "keywords": ["NeMo", "LangChain", "microservices", "cross-team influence", "partnership", "reusability", "ROI"]
      },

      {
        "title": "Result‑Driven Delivery Under Tight Deadlines",
        "description": "Led end‑to‑end delivery of a cross‑functional shared‑checkout feature under tight deadlines, significantly reducing bugs and improving adoption.",
        "details": "At Walmart Global Tech, led the technical design and delivery of a shared‑checkout feature coordinating payments, accounting, and UI services. Ran stakeholder workshops to clarify scope and dependencies, established weekly technical syncs and a Kanban board to manage blockers. Implemented testing frameworks (Jest, GraphQL contracts, Cypress) and paired with QA on daily triage. Took hands‑on ownership: built React components, GraphQL mutations, and blue‑green deploys on Kubernetes using GitLab CI and Helm rollbacks.",
        "keywords": ["cross-functional delivery", "React", "GraphQL", "CI/CD", "Kanban", "testing", "Kubernetes", "quality"]
      },

      {
        "title": "Passionate LLM Evangelist & AI Community Builder",
        "description": "Founded and facilitated bi‑weekly AI research lunches for ~50 engineers, fostering knowledge sharing and driving pilot projects based on LLM insights.",
        "details": "At Nvidia, created the “AI Research Lunch & Learn” to close internal LLM knowledge gaps across two teams (~50 people). Pitched the initiative and secured leadership sponsorship. Organized 12 sessions over six months, covering prompt engineering, RAG, inference scaling, and agentic workflows. Co-led sessions with internal and partner speakers, encouraged demo show‑and‑tell and Slack discussions. Captured summaries, slides, code, and prompts in a public repo and wiki. Inspired two pilot projects—auto-generated code comments and invoice summarization—and earned executive endorsement to replicate org-wide.",
        "keywords": ["LLM", "community building", "knowledge sharing", "facilitation", "RAG", "prompt engineering", "AI evangelism", "cross-functional"]
      },
];

export default Stories;
