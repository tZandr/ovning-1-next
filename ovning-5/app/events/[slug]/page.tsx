import { events } from '../../data/events';
import { notFound } from 'next/navigation';

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = events.find((e) => e.slug === params.slug);

  if (!event) notFound();

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.city}</p>
      <p>{event.description}</p>
    </div>
  );
}
