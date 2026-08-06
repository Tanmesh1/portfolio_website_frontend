import type { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    date: "May 24, 2024",
    readTime: "8 MIN READ",
    title: "Building RAG Pipelines: Beyond Simple Vector Search",
    excerpt: "Moving past basic similarity search to implement context-aware retrieval mechanisms using hybrid ranking and semantic re-ranking strategies.",
    tags: ["RAG", "AI", "LLM"],
    image: "/RAG_PIPELINE.webp",
    postNotes: {
      title: "Key Takeaways",
      points: [
        "Vector search alone is not enough once content becomes noisy or repetitive.",
        "Hybrid retrieval improves recall by combining semantic similarity with exact keyword matching.",
        "Re-ranking helps reduce irrelevant context, lower token usage, and improve answer grounding."
      ]
    },
    relatedPosts: [
      {
        title: "System Design Demystified",
        excerpt: "A practical breakdown of scalable system layers, reliability patterns, and architecture trade-offs.",
        tags: ["System Design", "Scalability"]
      },
      {
        title: "Designing AI Memory Systems",
        excerpt: "How chat history, retrieval, and structured memory work together in agentic applications.",
        tags: ["AI", "Memory"]
      }
    ],
    body: [
      "Simple vector search gets a demo working, but it usually breaks down once the knowledge base gets larger, noisier, or more repetitive. The retrieval layer starts returning fragments that are semantically adjacent without actually being useful for the answer the user needs.",
      "The first upgrade is hybrid retrieval. Dense similarity is still valuable, but lexical matching helps recover exact product names, error strings, and niche terminology that embeddings sometimes flatten away. Combining both signals creates a much stronger candidate set before the model ever sees the context.",
      "After retrieval, re-ranking matters more than most teams expect. A smaller semantic re-ranker or lightweight scoring layer can drastically improve which chunks make the final prompt. That means fewer irrelevant tokens, lower cost, and more grounded completions.",
      "The goal is not to retrieve more text. The goal is to retrieve the right evidence with enough structure that generation becomes the easy part."
    ]
  },
  {
    date: "April 21, 2026",
    readTime: "10 MIN READ",
    title: "System Design Demystified: A Practical Guide to Building Scalable Systems",
    excerpt: "A practical walkthrough of the core system design building blocks that help modern applications scale, stay reliable, and perform under pressure.",
    tags: ["System Design", "Scalability", "Architecture"],
    image: "/system_design.webp",
    postNotes: {
      title: "Summary Points",
      points: [
        "Good system design is about trade-offs, not memorizing every tool.",
        "Scalability depends on clear layers for APIs, application logic, storage, caching, and traffic control.",
        "Reliability comes from planning for failure with monitoring, fault tolerance, and secure infrastructure."
      ]
    },
    relatedPosts: [
      {
        title: "Building RAG Pipelines",
        excerpt: "Go beyond simple vector search with hybrid retrieval, re-ranking, and stronger grounding.",
        tags: ["RAG", "LLM"]
      },
      {
        title: "Backend Scaling Checklist",
        excerpt: "A focused checklist for databases, caching, queues, load balancing, and observability.",
        tags: ["Backend", "Reliability"]
      }
    ],
    body: [
      "When you hear system design, it can feel overwhelming, like you need to memorize dozens of tools, databases, and patterns. But the truth is simpler: system design is about understanding how different components work together to build systems that are scalable, reliable, and efficient.",
      { title: "1. Client Layer – Where It All Begins", text: "Every system starts with the client layer, whether that is a web application, mobile app, or even an IoT device. The client is responsible for sending requests to the backend and displaying responses to users. Think of it as the face of your system." },
      { title: "2. API Layer – The Entry Point", text: "The API layer acts as the gateway between clients and backend services. It ensures that requests are properly routed and secured through mechanisms such as authentication, authorization, rate limiting, and request routing. This is where tools like API gateways and load balancers come into play." },
      { title: "3. Application Layer – The Brain", text: "This is where the business logic lives. Whether you are using a monolith or microservices architecture, this layer processes requests and applies the rules that shape how the application behaves. Services like user management, payments, and notifications usually live here." },
      { title: "4. Database Layer – The Memory", text: "Databases store and manage your data. Relational systems like MySQL and PostgreSQL are ideal for structured data and strong consistency, while NoSQL systems like MongoDB and Cassandra provide flexible schemas and high scalability. Indexing, replication, and sharding are essential techniques for performance, reliability, and growth." },
      { title: "5. Caching Layer – The Speed Booster", text: "Caching helps reduce database load and improves response time. Tools like Redis and Memcached store frequently accessed data so the system does not need to fetch it from the database every time, making the entire application feel faster and more efficient." },
      { title: "6. Load Balancer – Traffic Controller", text: "A load balancer distributes incoming requests across multiple servers. This prevents any single server from being overloaded, improves overall performance, and ensures high availability during traffic spikes." },
      { title: "7. Message Queue – Asynchronous Backbone", text: "Message queues enable asynchronous communication between services. With tools like Kafka, RabbitMQ, or AWS SQS, work such as sending confirmation emails or processing background events can be queued and handled later instead of blocking the main request." },
      { title: "8. Storage Systems – Beyond Databases", text: "Not all data belongs in a database. Storage systems are better suited for images, videos, logs, and backups. Object storage platforms like AWS S3 are commonly used because they are durable, scalable, and cost effective for large unstructured files." },
      { title: "9. CDN – Global Speed Optimization", text: "A content delivery network distributes static content across servers around the world. This reduces latency, speeds up content delivery, and creates a better experience for users regardless of where they are located." },
      { title: "10. Security Layer – Protecting the System", text: "Security is non-negotiable. Authentication verifies identity, authorization determines permissions, and encryption through HTTPS and TLS protects data as it moves through the system. Strong security design has to be present across every layer, not added later." },
      { title: "11. Monitoring & Logging – Observability", text: "You cannot fix what you cannot see. Monitoring and logging tools such as Prometheus, Grafana, and the ELK stack help teams track system health, debug problems, and create alerts before incidents escalate into outages." },
      { title: "12. Scalability – Handling Growth", text: "Scalability is how systems survive growth. Vertical scaling increases the power of a single machine, while horizontal scaling adds more machines. Modern systems typically rely on horizontal scaling and autoscaling to handle traffic changes efficiently." },
      { title: "13. Networking & Infrastructure – The Foundation", text: "DNS, VPCs, and firewalls form the infrastructure foundation of the system. They control how components communicate, stay isolated, and remain secure while serving traffic reliably." },
      { title: "14. Deployment & DevOps – Shipping Faster", text: "DevOps practices help automate and streamline deployments. Docker makes packaging consistent, Kubernetes helps orchestrate containers, and CI CD pipelines make it easier to ship changes safely and predictably." },
      { title: "15. Data Processing Systems – Handling Big Data", text: "When systems deal with large-scale data, processing becomes its own layer. Batch systems like Hadoop and stream processing tools such as Kafka Streams and Spark are used to process and transform data efficiently at scale." },
      { title: "16. Reliability & Consistency", text: "Reliable systems are built with failure in mind. Concepts like the CAP theorem, eventual consistency, fault tolerance, and circuit breakers help teams design services that stay stable even when parts of the system fail." },
      { title: "17. Design Patterns – The Blueprint", text: "Patterns such as microservices, event-driven architecture, CQRS, and saga workflows provide proven ways to organize complex systems. The right choice depends on the trade-offs the system needs to make rather than following trends blindly." },
      "The most important lesson in system design is that it is not about memorizing tools. It is about understanding trade-offs. Ask what happens under high traffic, where the bottlenecks are, what can fail, and how the system should respond. That mindset is what turns scattered components into a well-designed system."
    ]
  }
];
