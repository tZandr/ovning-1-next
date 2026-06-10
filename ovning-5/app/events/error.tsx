'use client';

export default function EventsError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Något gick fel</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Försök igen</button>
    </div>
  );
}
