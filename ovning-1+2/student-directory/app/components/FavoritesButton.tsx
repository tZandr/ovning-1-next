'use client';

import { useState } from 'react';

interface Props {
  productId: number;
}

export default function FavoritesButton({ productId }: Props) {
  const [isFavorite, setIsFavorite] = useState(
    localStorage.getItem(`favorite-${productId}`) === 'true',
  );

  const toggle = () => {
    const next = !isFavorite;
    setIsFavorite(next);
    localStorage.setItem(`favorite-${productId}`, String(next));
  };

  return (
    <button onClick={toggle}>
      {isFavorite ? '❤️' : '🤍'}
    </button>
  );
}
