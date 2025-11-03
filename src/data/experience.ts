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
    duration: 'Jun 2023 – Present',
    location: 'Casablanca, Morocco',
    highlights: [],
    technologies: []
  },
  {
    id: 'topela',
    company: 'Topela',
    position: 'Agile Software Developer',
    duration: 'Jan 2022 – May 2023',
    location: 'Remote',
    highlights: [],
    technologies: []
  }
];