type CalendarEvent = {
  segments: string[]; // e.g. ['conferences', 'frontend-conf']
  title: string;
  city: string;
  description: string;
};

export const events: CalendarEvent[] = [
  {
    segments: ['conferences', 'frontend-conf'],
    title: 'Frontend Conference',
    city: 'Stockholm',
    description: '...',
  },
  {
    segments: ['conferences', 'react-summit'],
    title: 'React Summit',
    city: 'Göteborg',
    description: '...',
  },
  {
    segments: ['workshops', 'nextjs-auth'],
    title: 'Next.js Auth',
    city: 'Malmö',
    description: '...',
  },
  {
    segments: ['workshops', 'nextjs-live'],
    title: 'Next.js Live',
    city: 'Malmö',
    description: '...',
  },
  {
    segments: ['sweden', 'stockholm', 'react-night'],
    title: 'React Night',
    city: 'Stockholm',
    description: '...',
  },
  {
    segments: ['sweden', 'gothenburg', 'typescript-day'],
    title: 'TypeScript Day',
    city: 'Göteborg',
    description: '...',
  },
];

export function findEvent(segments: string[]) {
  return events.find((e) => e.segments.join('/') === segments.join('/'));
}
