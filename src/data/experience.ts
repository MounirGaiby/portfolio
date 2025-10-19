// Professional Experience - Edit this file to update your work history

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  highlights: string[];
  technologies?: string[];
}

export const experience: Experience[] = [
  {
    id: 'mib-tech',
    company: 'Mib-Tech',
    position: 'Software Engineer',
    duration: 'Nov 2023 -- Present',
    location: 'Casablanca, Morocco',
    highlights: [
      'Engineered and shipped Humaneo (SAAS HRIS platform)',
      'Performance optimization: 40% API response speed improvement',
      'ETL & Data Engineering with Airbyte and dbt',
      'Test automation with RSpec/Capybara'
    ],
    technologies: ['Rails', 'Hotwire', 'Turbo', 'PostgreSQL', 'Redis', 'Airbyte', 'dbt']
  }
];