import { findEvent } from '../../data/events';
import { notFound } from 'next/navigation';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function EventPage({ params }: { params: { slug: string[] } }) {
  const event = findEvent(params.slug);
  if (!event) notFound();

  return (
    <div>
      <Breadcrumbs segments={params.slug} />
      <h1>{event.title}</h1>
      <p>{event.city}</p>
      <p>{event.description}</p>
    </div>
  );
}
