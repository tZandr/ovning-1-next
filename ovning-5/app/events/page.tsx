import Link from 'next/link';
import { events } from '../data/events';

export default function EventsPage() {
  return (
    <main>
      <h1>Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.slug}>
            <Link href={`/events/${event.slug}`}>
              {event.title} - {event.city}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
