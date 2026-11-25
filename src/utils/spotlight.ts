import type { PointerEvent } from 'react';

/** Updates CSS --mx / --my variables on mouse move for pointer-tracking card spotlight glow. */
export function handleCardPointerMove(event: PointerEvent<HTMLElement>) {
  if (event.pointerType !== 'mouse') {
    return;
  }
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`);
}
