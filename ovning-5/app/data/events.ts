type CalendarEvent = {
  slug: string;
  title: string;
  city: string;
  description: string;
};

export const events: CalendarEvent[] = [
  {
    slug: 'frontend-conference',
    title: 'Frontend Conference',
    city: 'Stockholm',
    description: '...',
  },
  {
    slug: 'react-summit',
    title: 'React Summit',
    city: 'Göteborg',
    description: '...',
  },
  {
    slug: 'nextjs-live',
    title: 'Next.js Live',
    city: 'Malmö',
    description: '...',
  },
];
