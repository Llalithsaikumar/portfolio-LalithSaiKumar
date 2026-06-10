export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  slug: string;
  longDescription?: string;
  features?: string[];
  challenges?: string;
  images?: string[];
}

export const projectsData: ProjectItem[] = [
  {
    title: "Financial Analytics Platform",
    description:
      "Serverless backend platform ingesting live stock data for 150+ NSE-listed stocks with PostgreSQL schemas, external API integration, and hash-based caching reducing API calls by 70-80%. Handles 1K+ daily data updates with ownership-based access control.",
    longDescription:
      "Financial Analytics Platform is a serverless backend platform designed to ingest and process live stock data for over 150+ NSE-listed stocks. The system integrates robust PostgreSQL schemas, external financial APIs, and a high-performance hash-based caching layer to optimize data flow and minimize API consumption. It supports ownership-based access control, allowing secure multi-tenant usage. Deployed on modern cloud infrastructure, the platform handles more than 1K+ daily data updates while maintaining high availability and rapid response times.",
    features: [
      "Serverless architecture for scalable ingestion",
      "PostgreSQL database with optimized schemas",
      "Hash-based caching layer reducing API calls by 70-80%",
      "Ownership-based tenant access control",
      "Integration with external financial market APIs",
      "Supabase authentication and database hosting",
    ],
    challenges:
      "Implementing real-time data ingestion for 150+ stocks was challenging due to rate limits of external financial APIs. We resolved this by building a custom hash-based caching mechanism on the serverless side, which successfully prevented redundant fetches and reduced API costs by 70-80%.",
    image: "/assets/thumbnails/financial-analytics-platform/finsight-hero.webp",
    images: [
      "/assets/thumbnails/financial-analytics-platform/finsight-hero.webp",
      "/assets/thumbnails/financial-analytics-platform/dashboard.webp",
      "/assets/thumbnails/financial-analytics-platform/stocks.webp",
    ],
    tech: ["PostgreSQL", "REST APIs", "Serverless Functions", "Supabase"],
    github: "https://github.com/Llalithsaikumar",
    live: "https://www.fin-sight.live/",
    slug: "financial-analytics",
  },
  {
    title: "AI Copilot Console",
    description:
      "Developer-focused AI console for coordinating chat, tool calls, and workspace context in a clean web interface. Deployed on Vercel with a responsive command-center experience for building and testing AI-assisted workflows.",
    longDescription:
      "AI Copilot Console is a developer-focused console designed for building, testing, and monitoring AI-assisted workflows. It provides a clean command-center interface to coordinate chat prompts, model tool calls, and workspace context in real-time. Built to optimize AI developer experience, it features dynamic logs, context planning tasks, and quick access to system tools. Deployed on Vercel, it offers an interface designed for sub-second latency and responsive layout across all screens.",
    features: [
      "Real-time workspace context tracking",
      "Clean interface for coordinating chat & tool calls",
      "Command-center design with hotkeys and panel overlays",
      "Detailed log viewer for monitoring agent actions",
      "Optimized Vercel deployment with fast loading times",
    ],
    challenges:
      "Handling the high frequency of incoming tool logs and asynchronous execution statuses without lagging the browser UI was a key challenge. We addressed this by implementing virtualized lists for log streaming and debounce-based state updates in React, ensuring a smooth and responsive experience even during complex multi-step agent actions.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800",
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800",
    ],
    tech: ["React", "TypeScript", "AI Workflows", "Vercel"],
    github: "https://github.com/Llalithsaikumar/AI-Copilot-Console",
    live: "https://ai-copilot-console.vercel.app/",
    slug: "ai-copilot-console",
  },
  {
    title: "AI Campus Chatbot with Local RAG & Gemma2",
    description:
      "A full-stack, privacy-first chat assistant for campus information with RAG and locally-hosted Gemma2:2b model. Features real-time chat UI, custom knowledge base, and runs entirely offline.",
    longDescription:
      "This AI Campus Chatbot is a privacy-first, full-stack campus assistant designed to provide offline access to university details, student directories, and course details. By utilizing Retrieval-Augmented Generation (RAG) coupled with a locally run Gemma2:2b model, student data remains fully secure on local hardware. The application indexes campus documents using FAISS vector store and leverages a lightweight Python backend for prompt generation and query retrieval.",
    features: [
      "Privacy-first offline architecture",
      "Locally-run Gemma2:2b model via Ollama",
      "Retrieval-Augmented Generation (RAG) for accurate campus details",
      "FAISS vector database for document embeddings",
      "Clean real-time web-based chat interface",
    ],
    challenges:
      "Running a Large Language Model locally while maintaining sub-second response times on average consumer hardware was the primary challenge. We optimized the retrieval pipeline by pre-filtering vector matches and utilizing quantized Gemma weights (2b-instruct), which drastically minimized model inference latency.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800",
    images: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800",
    ],
    tech: ["Python", "Flask", "JavaScript", "Ollama", "FAISS"],
    github: "https://github.com/Llalithsaikumar/AI-ChatBot-with-Gemma2",
    slug: "ai-campus-chatbot",
  },
  {
    title: "Real-Time AI Risk Scoring System",
    description:
      "Real-time ML pipeline processing 100+ IoT endpoints with anomaly detection. Enhanced system performance by 30% and deployed scalable solution to GCP serving 3+ teams.",
    longDescription:
      "The Real-Time AI Risk Scoring System is a machine learning pipeline designed to process telemetry data from 100+ IoT endpoints. Using advanced classification and anomaly detection models, the system flags operational risks in real-time. Deployed on Google Cloud Platform (GCP) with Docker containers, it serves critical predictions to 3+ operations teams, improving overall anomaly detection performance by 30%.",
    features: [
      "Ingestion from 100+ simulated IoT endpoints",
      "Real-time machine learning inference pipeline",
      "Anomaly detection and risk classification using Scikit-learn",
      "Dockerized deployment for microservices scalability",
      "Hosted on GCP to support multiple dependent teams",
    ],
    challenges:
      "Ingesting high-velocity telemetry streams from over 100 endpoints caused bottleneck issues during inference. We resolved this by building a multi-threaded batching queue in Python and containerizing the inference worker using Docker, which improved data ingestion throughput and boosted system performance by 30%.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800",
    ],
    tech: ["Python", "Scikit-learn", "GCP", "Docker"],
    github: "https://github.com/Llalithsaikumar/telemetry_Analyzer",
    slug: "telemetry-analyzer",
  },
  {
    title: "Car Dealership Cloud Application",
    description:
      "Full-stack web app with authentication, admin panel, and data management. Improved user experience by 40% through backend enhancements and reduced load times by 20%.",
    longDescription:
      "Car Dealership Cloud Application is a full-stack web application designed to manage automotive inventory, client inquiries, and user reviews. Built using Django, it features secure user authentication, role-based admin dashboard, and scalable data management. Backend optimizations, such as database index caching and lazy loading, improved page load speed by 20% and enhanced overall user experience by 40%.",
    features: [
      "Role-based user authentication and admin panel",
      "Dynamic inventory query and filtering system",
      "Customer reviews and feedback submission modules",
      "Optimized database caching for faster page loads",
      "Responsive HTML/CSS frontend integrated with Django templates",
    ],
    challenges:
      "Handling large queries containing car reviews, specifications, and dealer locations led to initial performance lag. We restructured the database queries using Django's select_related and prefetch_related, and implemented caching, which reduced load times by 20% and improved UX scores by 40%.",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800",
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800",
    ],
    tech: ["Python", "Django", "REST APIs", "HTML/CSS"],
    github: "https://github.com/Llalithsaikumar/xrwvm-fullstack_developer_capstone",
    slug: "car-dealership-cloud",
  },
];
