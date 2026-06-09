'use client';
import { useState } from 'react';
import Link from 'next/link';
import { events } from '../data/events';

export function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside>
      <button onClick={() => setOpen(!open)}></button>
      <nav>
        {open && (
          <ul>
            {events.map((e) => (
              <li key={e.slug}>
                <Link href={`/events/${e.slug}`}>{e.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </aside>
  );
}
