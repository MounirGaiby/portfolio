// Core Skills - Senior Software Engineer Level
// Each category represents high-impact, marketable expertise

export interface SkillCategory {
  name: string;
  icon: string;
  command: string;
  description: string;
  skills: string[];
  priority: number; // 1 = highest priority, will show first
}

export const coreSkills: SkillCategory[] = [
  {
    name: "Backend Architecture",
    icon: "⚙️",
    command: "cat backend_architecture.txt",
    description: "Enterprise-level backend development",
    priority: 1,
    skills: [
      "Ruby on Rails",
      "Node.js",
      "Express.js",
      "Django",
      "Laravel",
      "Python",
      "PHP",
      "System Design",
      "API Architecture",
      "Microservices",
      "Performance",
      "Optimization",
    ],
  },
  {
    name: "Programming Languages",
    icon: "💻",
    command: "cat programming_languages.txt",
    description: "Core programming expertise",
    priority: 2,
    skills: [
      "Python",
      "Ruby",
      "JavaScript",
      "TypeScript",
      "C++",
      "C",
      "PHP",
      "Bash Scripting",
      "SQL",
      "HTML/CSS",
    ],
  },
  {
    name: "Data Engineering",
    icon: "📊",
    command: "cat data_engineering.txt",
    description: "ETL pipelines and data infrastructure",
    priority: 3,
    skills: [
      "PostgreSQL",
      "MySQL",
      "ClickHouse",
      "Airbyte",
      "Airflow",
      "dbt",
      "Warehousing",
      "ETL",
    ],
  },
  {
    name: "DevOps & Infrastructure",
    icon: "🚀",
    command: "cat devops_infrastructure.txt",
    description: "Production deployment and automation",
    priority: 4,
    skills: [
      "Docker",
      "Kubernetes",
      "CI/CD",
      "GH Actions",
      "IaC",
      "Arch Linux",
      "Bash Scripting",
    ],
  },
  {
    name: "Frontend Engineering",
    icon: "🎨",
    command: "cat frontend_engineering.txt",
    description: "Modern frontend development",
    priority: 5,
    skills: [
      "React",
      "Next.js",
      "Hotwire",
      "TypeScript",
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
    ],
  },
  {
    name: "Cloud & Monitoring",
    icon: "☁️",
    command: "cat cloud_monitoring.txt",
    description: "Cloud services and observability",
    priority: 6,
    skills: ["AWS", "Grafana", "Prometheus", "Loki", "Open telemetry"],
  },
  {
    name: "Professional Skills",
    icon: "🤝",
    command: "cat professional_skills.txt",
    description: "Soft skills and methodologies",
    priority: 7,
    skills: [
      "Agile",
      "Scrum",
      "Remote Work",
      "Team Leadership",
      "Code Review",
      "Technical",
      "Writing",
      "Problem",
      "Solving",
      "Communication",
    ],
  },
];
