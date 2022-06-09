import { useEffect, useState } from 'react';

export default function useAnyKeyToRender() {
  const [, forceRender] = useState('');
  const onKeydown = (e: KeyboardEvent) => forceRender(e.key);

  useEffect(() => {
    window.addEventListener('keydown', onKeydown);
    return () => window.removeEventListener('keydown', onKeydown);
  }, []);
}
